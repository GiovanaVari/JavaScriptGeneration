/*1- Faça um programa que mostre uma contagem na tela de 233 a 456, só que
contando de 3 em 3 quando estiver entre 300 e 400 e de 5 em 5 quando não estiver.
*/
const prompt = require("prompt-sync")()

//limpa tela
console.clear()

n = 233
do {
    console.log(n)
    if (n < 300) {
        n++
    } else if (n >= 300 && n < 400) {
        n += 3
    } else if (n >= 400) {
        n += 5
    }
} while (n <= 456)