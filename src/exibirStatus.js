function obterStatus(media) {
  if (media < 4) {
    return 'Reprovado por média';
  }
  else if (media >= 6) {
    return 'Aprovado por média';
  } else {
    return 'Aguardando a final';
  } 
}

module.exports = { obterStatus };