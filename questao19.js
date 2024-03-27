/*Como você pode verificar se um número é ímpar ou menor que 50 em 
JavaScript usando operadores lógicos
*/
function ehImparOuMenorQue50(numero) {
    return numero % 2 !== 0 || numero < 50;
}

// Exemplo de uso:
console.log(ehImparOuMenorQue50(30));   // false
console.log(ehImparOuMenorQue50(45));   // true
console.log(ehImparOuMenorQue50(50));   // false
console.log(ehImparOuMenorQue50(55));   // true
