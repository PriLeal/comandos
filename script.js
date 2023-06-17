function encontrarMaior() {
    // Obtendo os valores dos campos de entrada
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var numero3 = parseFloat(document.getElementById("numero3").value);

    // Encontrando o maior número
    var maiorNumero = Math.max(numero1, numero2, numero3);

    // Exibindo a mensagem de alerta
    alert("O maior número é: " + maiorNumero);
  }

function verificarIdade() {
    // Obtendo a idade no campo de entrada
    var idade = parseFloat(document.getElementById("idade").value);
    

    if(idade < 18){
      alert("Você é menor de idade.");
    }
    else{
      alert("Você é maior de idade.");
    }
  }


  function encontrarSoma() {
    var soma = 0;
    
      for (var i = 1; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
          soma += i;
        }
      }
      soma += i;    
      return soma;
  }
    
    
    // Exibir o resultado no site
    function calcularSoma() {
      var resultadoElement = document.getElementById("resultado");
      resultadoElement.textContent = "A soma é: " + encontrarSoma();
    }