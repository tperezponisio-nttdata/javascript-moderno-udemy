class Persona {

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';    
    }
    static mensaje(){
        console.log('Hola soy un método estático');    
    }

    // propiedades de la clase
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    // Getters y Setters
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita es ${this.comida}`;
    }

    // Métodos de la clase

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es: ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }

}

const spiderMan = new Persona('Peter Parker', 'Spiderman', 'Soy Spider Man');
const ironMan = new Persona('Tony Stark', 'Ironman', 'Soy Iron Man');
const hulk = new Persona('Hulk', 103, 'Soy Hulk');

// console.log(ironMan);
// console.log(hulk);

// spiderMan.quienSoy();
// spiderMan.miFrase();

spiderMan.setComidaFavorita = 'Milanesa';
// console.log(spiderMan);
// console.log(spiderMan.getComidaFavorita);

// Persona._conteo = 2;
console.log('Conteo Estático: ', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();