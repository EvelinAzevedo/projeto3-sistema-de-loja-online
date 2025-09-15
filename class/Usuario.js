class Usuario {
    #nome
    #idade
    constructor(nome,idade){
        this.#nome = nome
        this.#idade = idade
    }
    
    get nome(){
        return this.#nome
    }

    get idade() {
        return this.#idade
    }

    acessoPainel() {
        console.log("Acesso genérico ao sistema")
    }
}

module.exports = Usuario