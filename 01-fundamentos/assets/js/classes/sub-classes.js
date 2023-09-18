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

class Heroe extends Persona {
    clan = 'Sin Clan';
    constructor (nombre, codigo, frase, clan){
        super(nombre, codigo, frase);
        this.clan = clan;
    }

    quienSoy(){ 
        super.quienSoy();
        console.log(`Y soy de ${this.clan}`);
    
    }

}

const spiderMan = new Heroe('Peter Parker', 'Spiderman', 'Soy Spider Man', 'EL clan sarasa');


// const spiderMan = new Heroe();
console.log(spiderMan);
spiderMan.quienSoy();
