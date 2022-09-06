export abstract class Animal {
    protected nome: String
    protected idade: Number

    constructor(
        nome: String,
        idade: Number
    ) {
        this.nome = nome
        this.idade = idade
    }

    abstract emiteSom(): void
    abstract movimentar(): void
    public Infos() {
        if (this.idade > 1) {
            console.log(`Nome: ${this.nome}\nIdade: ${this.idade} anos de idade`)
        } else if (this.idade == 1) { console.log(`Nome: ${this.nome}\nIdade: ${this.idade} ano de idade`) }
        else {
            console.log(`Nome: ${this.nome}\nIdade: ${this.idade} meses de idade`)
        }

    }
}
