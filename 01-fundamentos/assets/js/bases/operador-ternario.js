/**
 * Días de la semana abrimos a las 11
 * pero los fines de semana abrimos a las 9
 * 
 */

// Entra a un sitio web y quiere saber si está abierto hoy
const dia = 2;
const horaActual = 8;

let horaApertura;
let mensaje; // Esta abierto, esta cerrado, hoy abrimos a las XX

// if ( dia === 0 || dia === 6 ) {
// if ( [0,6].includes(dia)  ) {
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Día de semana');
//     horaApertura = 11;
// }

horaApertura = ([0, 6].includes(dia)) ? 9 : 11;

// if (horaActual >= horaApertura) {
//     mensaje = 'Está abierto';
// } else {
//     mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;
// }

mensaje = (horaActual >= horaApertura) ? 'Está abierto' : `Está cerrado, hoy abrimos a las ${horaApertura}`;

console.log({ horaApertura, mensaje });


