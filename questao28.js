/*Como você pode verificar se uma pessoa é adolescente (idade entre 13 
    e 19 anos) em JavaScript usando operadores lógicos?*/

    function ehAdolescente(idade) {
        return idade >= 13 && idade <= 19;
    }
    
    
    console.log(ehAdolescente(15));  // true
    console.log(ehAdolescente(20));  // false
    console.log(ehAdolescente(12));  // false
    