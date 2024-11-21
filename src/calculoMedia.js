const { lancarNota } = require('./lancamentoNotas');

function calcularMedia(nota1, nota2) {
    lancarNota(nota1, nota2);
    const media = (nota1 + nota2) / 2;

    return media;
}

module.exports = { calcularMedia };

