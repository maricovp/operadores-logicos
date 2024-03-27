/*Como você pode verificar se um número é positivo e menor que 50 em 
JavaScript usando operadores lógicos?*/
function ehPositivoEMenorQue50(numero) {
    return numero > 0 && numero < 50;
}


console.log(ehPositivoEMenorQue50(30));   // true
console.log(ehPositivoEMenorQue50(-10));  // false
console.log(ehPositivoEMenorQue50(50));   // false
console.log(ehPositivoEMenorQue50(0));    // false
