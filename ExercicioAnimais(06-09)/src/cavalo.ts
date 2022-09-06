import { Animal } from "./animal";
export class Cavalo extends Animal {

    emiteSom() {
        console.log("iiirrrrí")
    }

    movimentar() {
        console.log("Trotando")
    }

    toString() {
        console.log(`Nome: ${this.nome}\n Idade: ${this.idade}`)
    }

}