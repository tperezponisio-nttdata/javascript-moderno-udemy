let juegos = ['Mario', 'Zelda', 'Metroid', 'Chrono Trigger'];
console.log('Largo:', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log({ primero, ultimo });


juegos.forEach((elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
});

let nuevaLongitud = juegos.push('Fire Emblem');
console.log(nuevaLongitud, juegos);

nuevaLongitud = juegos.unshift('Battle City');
console.log(nuevaLongitud, juegos);

let pos = 1;
console.log(juegos);
let juegosBorrados = juegos.splice(pos, 2);
console.log({ juegosBorrados, juegos });

let metroidIndex = juegos.indexOf('Metroid');
console.log(metroidIndex);

// TODO