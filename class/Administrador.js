const Usuario = require("../class/Usuario")

class Administrador extends Usuario {
    constructor(nome, idade) {
        super(nome, idade)
        this.produtos = []
    }
    acessoPainel(){
        return "Acesso ao painel administrativo."
    }
    adicionarProduto(produto) {
        this.produtos.push(produto)
    }
    deletarProduto() {
         this.produtos = this.produtos.filter(prod => prod.nome !== nomeProduto)
    }
}

module.exports = Administrador
