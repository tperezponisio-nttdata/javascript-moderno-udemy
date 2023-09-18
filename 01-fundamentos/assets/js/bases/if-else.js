

let a = 5;

if (a >= 10) {
    console.log('a mayor o igual a 10')
} else {
    console.log('a menor a 10')
}

// console.log('fin de programa');

const hoy = new Date();
let dia = hoy.getDay();

console.log({ dia });

if (dia === 0) {
    console.log('Domingo');
} else {

    console.log('No es Domingo');
}

// sin usar if else, o switch, unicamente objetos
dia = 3; // 0 - Domingo, 1 - Lunes, ....

// como objeto
const diasLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado'
};
// como array
const diasLetras2 = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
];

// dia de la semana
console.log( diasLetras[dia] || 'Día no definido' ); 
