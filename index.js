//1) Verificar se um número é primo
function numeroPrimo(number) {
        if (number < 2) {
          return false;
        }

        for (let i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) {
            return false;
          }
        }
      
        return true;
      }
      //exemplo
      numeroPrimo(12) //false
      numeroPrimo(5) //true

//2) Inverter uma string
function inverterString(str) {
    var splitString = str.split("");
    
    var reverseArray = splitString.reverse(); 

    var joinArray = reverseArray.join(""); 
    
    return joinArray;
}
//exemplo
inverterString("Marcelo") //'olecraM'

//3) Encontrar o maior elemento em um vetor
function maiorElemento(matrix) {
    let maxElement = matrix[0][0];
  
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] > maxElement) {
          maxElement = matrix[i][j];
        }
      }
    }
  
    return maxElement;
  }
  //exemplo
  const matrix = [
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
  ];
  maiorElemento(matrix) //12

//6) Validar uma senha
function senhaValida(p){
    var retorno = false;
    var letrasMaiusculas = /[A-Z]/;
    var letrasMinusculas = /[a-z]/; 
    var numeros = /[0-9]/;
    if(p.length < 8){
    return retorno;
    }
    var auxMaiuscula = 0;
    var auxMinuscula = 0;
    var auxNumero = 0;
    for(var i=0; i<p.length; i++){
    if(letrasMaiusculas.test(p[i]))
    auxMaiuscula++;
    else if(letrasMinusculas.test(p[i]))
    auxMinuscula++;
    else if(numeros.test(p[i]))
    auxNumero++;
    }
    if (auxMaiuscula > 0){
    if (auxMinuscula > 0){
    if (auxNumero > 0){
    retorno = true;
    }
    }
    }
    return retorno;
}
//exemplo
senhaValida("Teste1234") //true
senhaValida("teste12") //false
senhaValida("Teste12") //false

//11) Converter temperatura
function celsiusParaFahrenheit(tempCelsius) {
    var tempFahrenheit = tempCelsius * 1.8 + 32;
    return tempFahrenheit;
  }
  //exemplo
  celsiusParaFahrenheit(25) //77