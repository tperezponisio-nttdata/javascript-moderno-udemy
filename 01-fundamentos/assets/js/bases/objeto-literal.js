let personaje = {
    nombre: "Luke",  // key: value
    codeName: "Luke Skywalker",
    vivo: true,
    edad: 19,
    coords: {
        lat: -25.363,
        lng: 131.044
    },
    trajes: ["Cuaderno", "Mochila", "Bolsa"],
    direccion: {
        zip: "94043",
        ubicacion: "San Francisco"
    },
    'ultima-pelicula': "El padrino"
};
console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);

console.log('Coords', personaje.coords);
console.log('Lat', personaje.coords.lat);

console.log('Nro Trajes', personaje.trajes.length);
console.log('Ultimo Trajes', personaje.trajes[personaje.trajes.length-1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);

console.log('Ultima pelicula', personaje['ultima-pelicula']);

// Mas detalles

delete personaje.edad;
console.log(personaje);

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

Object.freeze(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log(propiedades, valores);
