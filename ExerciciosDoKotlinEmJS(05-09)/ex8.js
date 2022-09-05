/*8) Construa um sistema para ler uma variável numérica N e imprimi-la somente se a mesma
for maior que 100, caso contrário imprimi-la com o valor zero.*/

const prompt = require("prompt-sync")()

//limpa tela
console.clear()

//Entrada de n
let n = Number(prompt("Digite um número: "))

//limpa tela
console.clear()

//Checa se n é maior que 100
if (n > 100) {
    //Informa o número digitado
    console.log(`O número é: ${n}`)
} else {
    n = 0
    console.log(`O número é: ${n}`)
}