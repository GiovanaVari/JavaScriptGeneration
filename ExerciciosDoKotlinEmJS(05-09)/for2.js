/*2- Desenvolver um sistema que efetue a soma de todos os números ímpares que são
múltiplos de três e que se encontram no conjunto dos números de 1 até 500.*/

const prompt = require("prompt-sync")()
let soma = 0

for (let i = 3; i <= 500; i += 3) {

    //Checa se é multiplo de 3
    if (i % 3 == 0) {
        //Calcula a soma dos multiplos de 3
        soma += i
    }
}
console.clear()
//Mostra a soma dos números impares multiplos de 3
console.log(`Soma dos números de 1 até 500, que são ímpares e multiplos de 3: ${soma} `)
