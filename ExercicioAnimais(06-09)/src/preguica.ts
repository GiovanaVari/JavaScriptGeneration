import { Animal } from "./animal";
export class Preguica extends Animal {

    emiteSom() {
        console.log("Aaaa aaaa aaaa")
    }

    movimentar() {
        console.log("Subindo na árvore")
    }

    toString() {
        console.log(`Nome: ${this.nome}\n Idade: ${this.idade}`)
    }

}