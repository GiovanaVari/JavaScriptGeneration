/*1) João, homem de bem, comprou um microcomputador para controlar o rendimento diário
de seu trabalho. Toda vez que ele traz um peso de tomate maior que o estabelecido pelo
regulamento do estado de São Paulo (50 quilos) deve pagar um multa de R$ 4,00 por quilo
excedente. João precisa que você faça um sistema que leia a variável P (peso de tomates) e
verifique se há excesso. Se houver, gravar na variável E (Excesso) e na variável M o valor
da multa que João deverá pagar. Caso contrário mostrar tais variáveis com o conteúdo
ZERO.*/
const prompt = require("prompt-sync")()
let P = Number(prompt("Qual o peso dos tomates: "))

console.clear()

if (P > 50) {

    E = P - 50
    M = 4.00 * E
    console.log(`O peso excedeu: ${E} kg`)
    console.log(`Valor da multa a pagar é: R$${M}`)
} else {
    E = 0.00
    M = 0.00
    console.log(`O peso excedeu: ${E} kg`)
    console.log(`Valor da multa a pagar é: R$${M}`)
    console.log(`O PESO NÃO FOI EXCEDIDO`)
    console.log(`NÃO PAGARÁ MULTA`)
    console.log(`SEJA FELIZ`)
}
