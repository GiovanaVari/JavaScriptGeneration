/*
2- Obtenha um número digitado pelo usuário e repita a operação de multiplicar ele por
três (imprimindo o novo valor) até que ele seja maior do que 100. Ex.: se o usuário
digita 5, deveremos observar na tela a seguinte sequência: 5 15 45 135.*/
const prompt = require("prompt-sync")()

//Entrada do número
let n = Number(prompt("Digite um número: "))
//Mostrando n
console.log(n)

//Repetição ate 100
while (n <= 100) {

    //Calculando a multi por 3
    n = n * 3
    //Mostrando n
    console.log(n)

}
