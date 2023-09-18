

// function crearPersona(nombre, apellido) {
//     return { nombre, apellido }
// }

const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona('Juan', 'Perez');
// console.log(persona);


function imprimeArgumentos() {
    console.log(arguments);
}

const imprimeArgumentos2 = (edad, ...args) => {
    // console.log(args);
    return args;
}

// console.log(imprimeArgumentos(10, true, false, 'Tomas', 'Hola'));
const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Tomas', 'Hola');
// console.log({ casado, vivo, nombre, saludo });

const { apellido: nuevoApellido } = crearPersona('Maria', 'Gonzalez');
// console.log({ nuevoApellido });


// destructuracion de argumentos/ objetos

const luke = {
    nombre: 'Luke',  // key: value
    codeName: 'Luke Skywalker',
    vivo: true,
    edad: 19,
    trajes: ['Cuaderno', 'Mochila', 'Bolsa'],
};

// const imprimePropiedades = ( personaje ) => {
//     console.log('nombre', personaje.nombre);
//     console.log('codeName', personaje.codeName);
//     console.log('vivo', personaje.vivo);
//     console.log('edad', personaje.edad);
//     console.log('trajes', personaje.trajes);
// }

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
}

imprimePropiedades(luke);