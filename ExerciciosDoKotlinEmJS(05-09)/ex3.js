/*3) Desenvolva um sistema em que:
    Leia 4 (quatro) números;
    Calcule o quadrado de cada um;
    Se o valor resultante do quadrado do terceiro for >= 1000, imprima-o e finalize;
    Caso contrário, imprima os valores lidos e seus respectivos quadrados.
    */
const prompt = require("prompt-sync")()

//Entrada dos numeros
let n1 = Number(prompt("Digite o primeiro número: "))

let n2 = Number(prompt("Digite o segundo número: "))

let n3 = Number(prompt("Digite o terceiro número: "))

let n4 = Number(prompt("Digite o quarto número: "))

//Calculando o quadrado
q1 = n1 * n1
q2 = n2 * n2
q3 = n3 * n3
q4 = n4 * n4

//Limpa a tela
console.clear()

//checando se quadrado do n3 é maior que 1000
if (q3 >= 1000) {
    //Mensagem informando o resultado de n3 ao quadrado
    console.log(`O quadrado de ${n3} é: ${q3}`)
} else {
    //Mensagem informando os respectivos resultados
    console.log(`O quadrado de ${n1} é: ${q1}`)
    console.log(`O quadrado de ${n2} é: ${q2}`)
    console.log(`O quadrado de ${n3} é: ${q3}`)
    console.log(`O quadrado de ${n4} é: ${q4}`)
}