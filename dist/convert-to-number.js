export function convertToNumber(moeda) {
    const numero = Number(moeda.replaceAll('.', '').replace(',', '.'));
    return isNaN(numero) ? null : numero;
}
//# sourceMappingURL=convert-to-number.js.map