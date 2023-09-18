

const fer = {
    nombre: 'Fernando',
    edad : 30,
    imprimir() {
        console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad }`);
    }
}

const juan = {
    nombre: 'Juan',
    edad : 32,
    imprimir() {
        console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad }`);
    }
}

// fer.imprimir();

function Persona (nombre, edad) {
    console.log('Se ejecuto esta linea');
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function() {
        console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad }`);
    }
    
}

const maria = new Persona('María', 18); 
const pepe = new Persona('Pepe', 28); 
// console.log(maria);
maria.imprimir();
pepe.imprimir();