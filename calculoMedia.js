function calcularMedia(up1, up2) {
    let media = (up1 + up2) / 2;
    if (media >= 6) {
        return "Aprovado por média";
    } 
    if (media < 4) {
        return "Reprovado por média";
    } else {
        let final = 12 - media;
        return `Aguardando a final, nota necessária será ${final.toFixed(2)}`;
    }
}

module.exports = { calcularMedia };
