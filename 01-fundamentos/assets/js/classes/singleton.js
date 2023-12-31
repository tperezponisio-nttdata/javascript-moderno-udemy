class Singleton {
    
    static instancia;   // undefined
    nombre = '';

    constructor( nombre = '' ){

        // el doble !! es para que retorne false, ! de undefined 
        // retorna true, por eso el !!
        if ( !!Singleton.instancia ){
            return Singleton.instancia;
        }
        Singleton.instancia = this;
        this.nombre = nombre;        
    }
}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('Sarasa');
console.log(`Nombre en la instancia1 es: ${ instancia1.nombre }`);
console.log(`Nombre en la instancia2 es: ${ instancia2.nombre }`);
console.log(`Nombre en la instancia3 es: ${ instancia3.nombre }`);
