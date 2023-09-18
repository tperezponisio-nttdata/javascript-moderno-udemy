import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {

    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    };

    const renderTwoHeroes = (hero1, hero2) => {
        element.innerHTML = `
        <h3>${hero1.name}</h3>
        <h3>${hero2.name}</h3>
        `;
    };

    const renderError = (error) => {
        element.innerHTML = `<h1>Error: </h1>
                            <h3>${error}</h3>`;
    }

    const id1 = '5d86371f25a058e5b1c8a65e';
    const id2 = '5d86371f9f80b591f499df32';


    //! FORMA 3, LA MAS PROLIJA
    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
        .then(([hero1, hero2]) => {
            renderTwoHeroes(hero1, hero2);
        })
        .catch(renderError);


    //! FORMA 2
    // let hero1, hero2;
    // findHero(id1)
    //     .then(hero => {
    //         hero1 = hero;
    //         return findHero(id2);
    //     }).then(hero2 => {
    //         renderTwoHeroes(hero1, hero2);
    //     })
    //     .catch(renderError);


    //! FORMA 1    
    // findHero(id1)
    // .then((superHero) => {
    //     renderHero(superHero)
    // });

    // Version mas corta que la de aca arriba
    // si envio como parametros los mismos que recibe la funcion
    // que estroy llamando, puedo llamar solo a su firma y listo
    // en el error pasa lo mismo

    // findHero(id1)
    //     .then((hero1) => {
    //         findHero(id2)
    //             .then((hero2) => {
    //                 renderTwoHeroes(hero1, hero2);
    //             })
    //             .catch(renderError);
    //     })
    //     .catch(renderError);

}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = (id) => {

    return new Promise((resolve, reject) => {
        // const promise = new Promise((resolve, reject) => {

        const hero = heroes.find(heroe => heroe.id === id);

        if (hero) {
            resolve(hero);
            return;
        }
        reject(`Hero with ${id} not found`);

    });

    // return promise;
}