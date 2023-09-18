import todoStore, { Filters } from '../store/todo.store';
import html from './app.html?raw';
import { Todo } from './models/todo.model';
import { renderTodos, renderPendingTodos } from './use-cases';

const ElementIDs = {
    ClearCompleted: '.clear-completed',
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    TodoFilters: '.filtro',
    PendingCount: '#pending-count'
}


/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(ElementIDs.TodoList, todos);
        updatePendingCount();
    }

    const updatePendingCount = () => {
        renderPendingTodos(ElementIDs.PendingCount);
    }

    // Funcion anónima autoinvocada
    // Cuando la funcion App() se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html; // Recien acá se carga todo el html en la pagina
        document.querySelector(elementId).append(app);
        displayTodos();

    })();

    // Referencias HTML
    const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);
    const todoListUl = document.querySelector(ElementIDs.TodoList);
    const btnClearCompleted = document.querySelector(ElementIDs.ClearCompleted);
    const filtersLis = document.querySelectorAll(ElementIDs.TodoFilters);
    // const pendingCount = document.querySelectorAll(ElementIDs.PendingCount);

    // Listeners
    newDescriptionInput.addEventListener('keyup', (event) => {

        if (event.keyCode !== 13) return;                   // Si no es "Enter", la función retorna y sigue "escuchando", no ejecuta el codigo siguiente.
        if (event.target.value.trim().length === 0) return; // Lo mismo que la linea anterior peroi verificando que el campo no este vacío
        // Si ambas condiciones anteriores no se cumplen (es decir, se presiona la tecla "Enter" y el campo de entrada no está vacío),
        // entonces el código restante se ejecuta:

        todoStore.addTodo(event.target.value);
        event.target.value = '';
        displayTodos();

    });

    todoListUl.addEventListener('click', (event) => {
        const element = event.target.closest('[data-id]'); // Busca el elemento padre mas cercano que tenga el atributo data-id   
        const id = element.getAttribute('data-id');
        todoStore.toggleTodo(id);
        displayTodos();
        // console.log(id);
    });

    todoListUl.addEventListener('click', (event) => {
        const isDestroyBtn = event.target.className === 'destroy';
        const element = event.target.closest('[data-id]');
        if (!element || !isDestroyBtn) return;

        todoStore.deleteTodo(element.getAttribute('data-id'));
        displayTodos();

    });

    btnClearCompleted.addEventListener('click', () => {
        todoStore.deleteCompleted();
        displayTodos();
    });

    filtersLis.forEach(element => {

        element.addEventListener('click', (element) => {

            filtersLis.forEach(el => el.classList.remove('selected')); // recorro todos esos lis y les saco la clase
            element.target.classList.add('selected'); // al que se le hico click se la agrego

            switch (element.target.text) {
                case 'Todos':
                    todoStore.setFilter(Filters.All);
                    break;
                case 'Pendientes':
                    todoStore.setFilter(Filters.Pending);
                    break;
                case 'Completados':
                    todoStore.setFilter(Filters.Completed);
                    break;
            }
            displayTodos();
        });

    });

};

