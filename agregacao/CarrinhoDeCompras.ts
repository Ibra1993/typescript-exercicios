import { Produto } from "./Produto";

export class CarrinhoDeCompras {

    private readonly produtos: Produto[] = [];

    inserirProdutos(...produtos: Produto[]){
  
        for (const produto of produtos){
            this.produtos.push(produto);
        }
    }

    quantidadeProdutos(): number {
        
        return this.produtos.length;
    }




}