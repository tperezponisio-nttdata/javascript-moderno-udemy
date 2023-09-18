

const regresaTrue = () => { 
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => { 
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negación');
console.log( true ); // true ;
console.log( !true ); // false ;
console.log( !false ); // true ;

console.log( !regresaFalse() ); // true ;

console.warn('And'); // true si todos los valores son verdaderos
console.log(true && true); // true ;
console.log(true && !false); // true ;

console.log('=================');
console.log( regresaFalse() && regresaTrue() ); // false ;
console.log( regresaTrue() && regresaFalse() ); // false ;

console.log('======= && ========');
regresaTrue() && regresaFalse();

console.warn('Or'); // true si alguno de los valores es verdadero
console.log( true || false ); // true ;
console.log( false || false ); // false ;
console.log( regresaTrue() || regresaFalse() ); // true

console.log('Asignaciones');
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo' && 150; // Hola Mundo
const a2 = 'Hola' && 'Mundo' && soyFalso;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log({a1});
console.log({a2});
console.log({a3});
console.log({a4});
console.log({a5});

