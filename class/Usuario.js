class Usuario {
    #nome
    #idade
    constructor(nome,idade){
        this.nome=nome
        this.idade=idade
    }
    acessoPainel() {
        console.log("Acesso genérico ao sistema")
    }
}

module.exports = Usuario