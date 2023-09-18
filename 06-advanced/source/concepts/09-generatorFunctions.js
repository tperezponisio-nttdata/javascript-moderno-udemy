/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = (element) => {

    // const myGenerator = myFirstGeneratorFunction();
    const genId = idGenerator();

    const button = document.createElement('button');
    button.innerText = 'Click me';
    element.append(button);

    const renderButton = () => {
        const { value } = genId.next();
        button.innerText = `Click ${value}`;
    }

    button.addEventListener('click', renderButton);

    

}

function* idGenerator() {
    let currentId = 0;
    while (true) {
        yield ++currentId;
    }
}


function* myFirstGeneratorFunction() {

    yield 'mi primer valor';
    yield 'mi segundo valor';
    yield 'mi tercer valor';
    yield 'mi cuarto valor';

    return 'no hay valores';
    yield 'ya no puedo hacer nada';
}