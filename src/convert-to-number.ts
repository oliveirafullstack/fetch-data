/** 
 *  Recebe uma string '1.000,00' e retorna um number -> 1000.00 
 */
export function convertToNumber(moeda: string): number | null {
const numero =  Number(moeda.replaceAll('.', '').replace(',', '.'));
return isNaN(numero) ?   null : numero;
}

