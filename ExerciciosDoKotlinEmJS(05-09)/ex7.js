/*7) Receber valores de base e altura de um triângulo e verificar se são valores válidos
(positivos maiores que zero). Em caso afirmativo, calcular a área do triângulo.*/

const prompt = require("prompt-sync")()

//Limpa a tela
console.clear()

//Entrada dos valores da base e altura do triângulo
let base = Number(prompt("Digite a base do triângulo: "))

let altura = Number(prompt("Digite a altura do triângulo: "))

//Limpa a tela
console.clear()

//Checa se os valores de base e altura são positivos maiores que zero
if (base > 0 && altura > 0) {

    //Calculando a area
    area = base * altura

    //Mostrando o resultado do calculo
    console.log(`A area do triângulo é: ${area}`)
}