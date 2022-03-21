function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  //console.log(valorEmDolarNumerico);

  var valorEmReal = valorEmDolarNumerico * 5;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O valor em Real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEuro() {
  var valorEuroElemento = document.getElementById("valorEuro");
  var valorEuro = valorEuroElemento.value;
  var valorEuroEmEuroNumerico = parseFloat(valorEuro);

  var valorEmReal = valorEuroEmEuroNumerico * 6;
  console.log(valorEmReal);

  var elementoValorConvertidoEuro = document.getElementById(
    "valorConvertidoEuro"
  );
  var valorConvertidoEuro = "O valor em Euro é R$ " + valorEmReal;
  elementoValorConvertidoEuro.innerHTML = valorConvertidoEuro;
}