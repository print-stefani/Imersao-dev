function ConverterDolar() {
  var elemento = document.getElementById("valorD");
  var valor = elemento.value;
  var valorDolar = parseFloat(valor);

  var valorReal = valorDolar * 5.1;
  var valorReal = valorReal.toLocaleString("pt-BR", {style: "currency",currency: "BRL"});

  var ValorConvertidoDolar = document.getElementById("valorConvertidoDolar");
  var resultadoD = `O resultado em reais é ${valorReal}`;
  ValorConvertidoDolar.innerHTML = resultadoD;
}

function ConverterEuro() {
  var elementoEuro = document.getElementById("valorE");
  var valorE = elementoEuro.value;
  var valorEuro = parseFloat(valorE);

  var valorReal = valorEuro * 5.15;
  var valorReal = valorReal.toLocaleString("pt-BR", {style: "currency",currency: "BRL"});
  console.log(valorReal);

  var ValorConvertidoEuro = document.getElementById("valorConvertidoEuro");
  var resultadoE = `O resultado em reais é ${valorReal}`;
  ValorConvertidoEuro.innerHTML = resultadoE;
}

function ConverterPeso() {
  var elementoPeso = document.getElementById("valorP");
  var valorP = elementoPeso.value;
  var valorPeso = parseFloat(valorP);

  var valorReal = valorPeso * 0.036;
  var valorReal = valorReal.toLocaleString("pt-BR", {style: "currency",currency: "BRL"});
  console.log(valorReal);

  var ValorConvertidoPeso = document.getElementById("valorConvertidoPeso");
  var resultadoP = `O resultado em reais é ${valorReal}`;
  ValorConvertidoPeso.innerHTML = resultadoP;
}
