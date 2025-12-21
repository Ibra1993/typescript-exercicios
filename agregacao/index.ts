import { CarrinhoDeCompras } from "./CarrinhoDeCompras";
import { Produto } from "./Produto";


const produto1 = new Produto('Camiseta', 49.9)
const produto2 = new Produto('Blusa', 59.9)
const produto3 = new Produto('Calça Jeans', 79.9)
const produto4 = new Produto('Camiseta', 19.9)

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3, produto4);
const qtd = carrinhoDeCompras.quantidadeProdutos();

console.log(carrinhoDeCompras);
console.log('Quantidade: ', qtd);


