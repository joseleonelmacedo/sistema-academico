function lancarNota(nota1, nota2) {
    if (isNaN(nota1) || isNaN(nota2)) {
        throw new Error('Entradas devem ser numéricas');
    }
    if ((nota1 < 0 || nota1 > 10) || !!((nota1 * 10**1) % 1)) {
        throw new Error('Nota de 1UP inválida');
    }
    if ((nota2 < 0 || nota2 > 10) || !!((nota2 * 10**1) % 1)) {
        throw new Error('Nota de 2UP inválida');
    }
    return 'Notas salvas com sucesso'
}

module.exports = { lancarNota };
