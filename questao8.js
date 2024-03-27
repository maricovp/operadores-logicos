/*Como você pode verificar se um número é par e menor que 100 em 
JavaScript usando operadores lógicos? */

function ehParEMenorQue100(numero) {
    return numero % 2 === 0 && numero < 100;
}

// Exemplo de uso:
console.log(ehParEMenorQue100(50));  // true
console.log(ehParEMenorQue100(101)); // false
console.log(ehParEMenorQue100(77));  // false