var usuario = parseFloat(prompt("Escolha com sabedoria sua jogada!\nDigite o número correspondente a sua jogada...\n(1)= Pedra.\n(2)= Papel.\n(3)= Tesoura."));
var computador = Math.random();

if (computador <= 0.33) {
  computador = 1;
} else if (0.33 < computador <= 0.66){
  computador = 2;
}
else{
  computador = 3;
}

if(usuario === 1){
  if (computador === 2) {
    alert("Você jogou pedra e o computador jogou Papel.\nVocê não escolheu com sabedoria e por isso foi derrotado!")
  }else if (computador === 3) {
    alert("Você jogou pedra e o computador jogou Tesoura.\nVocê superou o computador,PARABÉNS!")
  }
  else {
    alert("Você jogou pedra e o computador jogou pedra.\nVocê e o computador pensaram na mesma jogada... Empate declarado!")
  }
} else if (usuario === 2){
  if (computador === 1) {
    alert("Você jogou Papel e o computador jogou Pedra.\nVocê é fantástico! Ganhou do computador.")
  }else if (computador === 3) {
    alert("Você jogou Papel e o computador jogou Tesoura.\nO computador foi mais esperto que você, para de brincar e tente de novo!")
  }
  else {
    alert("Você jogou Papel e o computador jogou Papel.\nNinguém ganhou, os dois perderam... Por isso chamamos de empate.")
  }
}
else{
  if (computador === 1) {
    alert("Você jogou Tesoura e o computador jogou Pedra.\nO computador sempre irá ganhar de pessoas tolas... Por isso ele ganhou agora!")
  }else if (computador === 2) {
    alert("Você jogou Tesoura e o computador jogou Papel.\nVocê veceu, aproveite sua vitória guerreiro!")
  }
  else {
    alert("Você jogou Tesoura e o computador jogou Tesoura.\nEmpate! Você e o computado são dois bobos.")
  }
}