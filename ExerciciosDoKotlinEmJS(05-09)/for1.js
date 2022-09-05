/*1- A prefeitura de uma cidade fez uma pesquisa entre 20 de seus habitantes,
coletando dados sobre o salário e número de filhos. A prefeitura deseja saber:  
a) média do salário da população;
b) média do número de filhos;
c) maior salário;
d) percentual de pessoas com salário até R$100,00.*/
const prompt = require("prompt-sync")()

let mf = 0
let medias = 0
let sm = 0
let perc = 0
let cont = 0
let i = 1

for (i = 1; i <= 20; i++) {
    //Entrada dos dados
    let salario = Number(prompt("Digite seu salário: "))

    let filho = Number(prompt("Digite número de filhos: "))

    //Calculando média filhos
    mf = mf + filho

    //Calculando Média salário
    medias = medias + salario

    //Checa se é o maior salário
    if (salario >= sm) {
        //Guarda o maior salário
        sm = salario
    }
    //Checa se o salário é menor igual a 100
    if (salario <= 100) {
        //Conta
        cont++
    }
}
//Calculando o percentual de pessoas com salário menor igual a 100
perc = (cont / 20) * 100

//Calculandi média de salário
medias = medias / 20
//Calculando média de filhos
mf = mf / 20

console.clear()

//Mostra média dos salários
console.log(`Média do salário da população: R$${medias}`)
//Mostra média de filhos
console.log(`Média de filhos: ${mf}`)
//Mostra maior salário
console.log(`Maior salário: R$${sm}`)
//Mostra percentual de salários menor igual a 100
console.log(`Percentual de pessoas que ganham abaixo de R$100,00: ${perc} %`)