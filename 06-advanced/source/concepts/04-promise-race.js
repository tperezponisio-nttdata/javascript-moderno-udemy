/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = (element) => {

    element.innerHTML = 'Loading...';

    const renderValue = (value) => {
        element.innerHTML = value;

    }
    // renderValue('sarasa');
    Promise.race([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ]).then( renderValue );
 // ]).then( value => renderValue(value)  );
 // es lo mismo, pq el value que retorna es el mismo que le paso a la funcion

}

const slowPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Slow Promise');
    }, 2000);
});

const mediumPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Medium Promise');
    }, 1500);
});

const fastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Fast Promise');
    }, 1000);
});