const Usuario = require("../class/Usuario")

class Administrador extends Usuario {
    constructor(nome,idade) {
        super(nome,idade)
        this.produtos = []
    }
    acessoPainel(){
        console.log("Acesso ao painel administrativo")
    }
    adicionarProduto(produto) {
        this.produtos.push(produto)
    }
    deletarProduto() {
        this.produtos.pop
    }
}

module.exports = Administrador
