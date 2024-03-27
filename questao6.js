/*Como você pode verificar se um número está dentro de um intervalo de 
10 a 20 em JavaScript usando operadores lógicos?
*/
function dentroDoIntervalo(numero) {
    return numero >= 10 && numero <= 20;
}

// Exemplo de uso:
console.log(dentroDoIntervalo(15));  // true
console.log(dentroDoIntervalo(5));   // false
console.log(dentroDoIntervalo(25));  // false
