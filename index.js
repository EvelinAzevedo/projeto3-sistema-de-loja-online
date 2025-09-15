const Administrador = require("./class/Administrador")
const Cliente = require("./class/Cliente")
const Pedido = require("./class/Pedido")
const Produto = require("./class/Produto")
const Usuario = require("./class/Usuario")

const admin = new Administrador("Aline", 24)
const cliente = new Cliente("Evelin", 16)
const user = new Usuario("Liz",20)

const produto1 = new Produto("maquiagem", 20, 30)
const produto2 = new Produto("creme",12,40)

user.acessoPainel()
console.log("========================================")

admin.adicionarProduto(produto1)
admin.adicionarProduto(produto2)
console.log(admin.acessoPainel())
console.log(`Produtos cadastros pelo administrador`)
console.log(admin.produtos)
console.log("========================================")


cliente.adicionarProduto(produto1)
cliente.adicionarProduto(produto2)
console.log(`cliente.acessoPainel:`)
console.log(cliente.carrinho)
const pedido = new Pedido(cliente, cliente.carrinho)
console.log(`Valor total do pedido: ${pedido.calcularTotal()}`)