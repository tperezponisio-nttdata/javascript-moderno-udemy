/**
 * Esta funcion devuelve el valor de una carta en numeros
 * @param {String} carta Ejemplo: '4H'
 * @returns {Number} Retorna el valor de la carta
 */
export const valorCarta = (carta) => {

  if (!carta || carta === '') {
    throw new Error ("No vino ninguna carta");
  }

  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};