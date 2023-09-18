
let nombre = 'Tomas';

function saludar(nombre) {
    // console.log(arguments);
    // console.log('Hola ' + nombre);
    return 1;

}

// funcion anonima asignada a la const
// const saludar2 = function ( nombre ) {
//     console.log('Hola 2 ' + nombre);
// }

// lambda functions o anonimas
// const saludar3 = ( nombre ) => {
//     console.log('Hola saludar3 ' + nombre);
// };

// saludar( nombre );
const retornoDeSaludar = saludar('Juan', 40, true, 'Costa Rica');
// saludar2( 'Juan' );

// console.log('retorno de saludar', retornoDeSaludar);

function sumar(a, b) {
    return a + b;
}

// const sumar2 = (a, b) => {
//     return a + b;
// }

const sumar2 = (a, b) => a + b; 

function getAleatorio() {
    return Math.random();    
}

const getAleatorio2 = () => Math.random();

// console.log(sumar(5, 10));
// console.log(sumar2(5, 15));
console.log(getAleatorio2());

