import { Animal } from "./animal";
export class Cachorro extends Animal {

    emiteSom() {
        console.log("Au Au")
    }

    movimentar() {
        console.log("Correndo")
    }

}