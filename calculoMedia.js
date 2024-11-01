function calcularMedia(up1, up2) {
    media = up1 + up2 / 2;
    if (media > 6){
        return "Aprovado por média";
    } 
    if ( media < 4) {
        return "Reprovado por média";
    }
    else{
        final = 12 - media;
        return `Aguardando a final nota necessaria sera ${final}`;
    }
}