/*4) Faça um sistema que leia um número inteiro e mostre uma mensagem indicando se este
número é par ou ímpar, e se é positivo ou negativo.*/

const prompt = require("prompt-sync")()

//Limpa a tela
console.clear()

//Entra com o número
let n = Number(prompt("Digite um número: "))

//Calcula o resto
r = n % 2

//Checa se o resto é igual a 0 (se n é par)
if (r == 0) {
    //Mensagem informando que n é par
    console.log(`O número ${n} é par`)
    //Checa se n é positivo ou negativo
    if (n >= 0) {
        //Mensagem informando que n é positivo
        console.log(`O número ${n} é positivo`)
    } else {
        //Mensagem informando que n é negativo
        console.log(`O número ${n} é negativo`)
    }
} else {
    //Mensagem informando que n é impar
    console.log(`O número ${n} é impar`)
    //Checa se n é positivo ou negativo
    if (n >= 0) {
        //Mensagem informando que n é positivo
        console.log(`O número ${n} é positivo`)
    } else {
        //Mensagem informando que n é negativo
        console.log(`O número ${n} é negativo`)
    }
}