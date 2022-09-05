/*1- Elaborar um programa que efetue a leitura sucessiva de valores numéricos e
apresente no final o total do somatório, a média e o total de valores lidos. O programa
deve fazer as leituras dos valores enquanto o usuário estiver fornecendo valores
positivos. Ou seja, o programa deve parar quando o usuário fornecer um valor
negativo.*/
const prompt = require("prompt-sync")()

let n = 0
let soma = 0
let total = 0

while (n >= 0) {
    //Entrada do número
    n = Number(prompt("Digite um número: "))

    //Checa se o número é positivo
    if (n >= 0) {
        //Soma os números digitados
        soma += n
        //Guarda quantos números foi digitado
        total++
    }
}
//Calcula a média dos números
media = soma / total

//Mostra quantos números foi digitado
console.log(`Foram digitados ${total} números `)
//Mostra a soma dos números
console.log(`A soma desses números é: ${soma}`)
//Mostra a média dos números
console.log(`A média é: ${media}`)