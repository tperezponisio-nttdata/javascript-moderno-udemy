

console.warn('While');
const autos = ['Ford', 'Chevy', 'Honda', 'Toyota'];
let i = 0;

while( i < autos.length ){
    console.log(autos[i]);
    i++;
} 

// undefined
// null
// false  -> los tres rompen el ciclo

while( autos[i] ){
    console.log(autos[i]);
    i++;
} 

console.warn('Do While');
let j = 0;
do {
    console.log(autos[j]);
    j++;
} while ( autos[j] );