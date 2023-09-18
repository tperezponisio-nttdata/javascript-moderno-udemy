/**
 * Esta función saca una carta del deck y la retorna
 * @param {Array<String>} deck Es un arreglo de string, ejemplo: ['JD', 'JS', '7C', ... , '2C', '7H', '3C', ]
 * @returns {String} Retorna una carta
 */
export const pedirCarta = (deck) => {

  if (!deck || deck.length === 0) {
    throw new Error ("No hay cartas en el deck");
  }
  
  const carta = deck.pop();
  return carta;
};