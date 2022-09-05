/*2) Elabore um sistema que leia as variáveis C e N, respectivamente código e número de
horas trabalhadas de um operário. E calcule o salário sabendo-se que ele ganha R$ 10,00
por hora. Quando o número de horas exceder a 50 calcule o excesso de pagamento
armazenando-o na variável E, caso contrário zerar tal variável. A hora excedente de
trabalho vale R$ 20,00. No final do processamento imprimir o salário total e o salário
excedente.*/
const prompt = require("prompt-sync")()
//Entrada de código e numero de horas trabalhadas
let C = Number(prompt("Digite seu código: "))
let N = Number(prompt("Digite o número de horas trabalhadas: "))

//Limpa a tela
console.clear()

//Checando se passa de 50 horas de trabalho
if (N >= 50) {
    //Calculando o excesso de horas
    E = (N - 50) * 20.00
    //Calculando o salario
    S = 50 * 10.00

} else {
    //Zerando horas excedidas e calculando o salario
    E = 0.00
    S = N * 10.00
}

//Calculando o total do salario
ST = S + E

//Mensagem mostrando o valor do salario sem as horas excedidas, o salario excedente e o salario total
console.log(`Salario: R$${S}`)
console.log(`Salario excedente: R$${E}`)
console.log(`Salario total: R$${ST}`)