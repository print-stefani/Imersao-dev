var numSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (chute == numSecreto) {
    resultado.innerHTML = "Você acertou :)";
    console.log("acertou");
  } else if (chute > 10 || chute < 0) {
    resultado.innerHTML = "Por favor, digite um número de 0 a 10...";
    console.log("Numero invalido, digite um numero de 0 a 10!");
  } else {
    resultado.innerHTML = "Você errou :(";
    console.log("errou");
  }
}
// enquanto o as tentativas forem maior que 0
// continue os if de tentativas
