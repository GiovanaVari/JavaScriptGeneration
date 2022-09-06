import PromptSync from "prompt-sync";
import { Animal } from "./src/animal";
import { Cachorro } from "./src/cachorro";
import { Cavalo } from "./src/cavalo";
import { Preguica } from "./src/preguica";

const prompt = PromptSync()
console.clear()
let op: Number = 0
    while (op != 4) {
        console.log("-----Menu-----")
        console.log("1 - Cão")
        console.log("2 - Cavalo")
        console.log("3 - Preguiça")
        console.log("4 - Sair")
        console.log()
        op = Number(prompt("Escolha uma opção: "))
        switch (op) {
            case 1 : 
                console.clear()
                let cao = new Cachorro(
                    "Dolinho", 
                    1
                )
                cao.emiteSom()
                cao.movimentar()
                cao.Infos()
                break;
            
            case 2: 
                console.clear()
                let potrinho = new Cavalo(
                    "Zé", 0.5
                )
                potrinho.emiteSom()
                potrinho.movimentar()
                potrinho.Infos()
                break;

            case 3: 
                console.clear()
                let sid = new Preguica(
                    "Sidinha", 4.0
                )
                sid.emiteSom()
                sid.movimentar()
                sid.Infos()
                break;

            case 4: 
            console.clear()
            console.log("Saindo"); break;
            default : console.log("Opção invalida!");
            break;
        }
    }