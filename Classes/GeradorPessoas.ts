import { Pessoa } from "./Pessoa";

export class GeradorPessoas {

    private pessoas: Pessoa[] = [];

    inserirPessoa(pessoa: Pessoa): void {
        this.pessoas.push(pessoa);
        console.log(`Pessoa ${pessoa.getNome()} inserida com sucesso!`);
    }

   
   remover(nome: string): void {
    
    let index = -1;
    for (let i = 0; i < this.pessoas.length; i++) {
        if (this.pessoas[i].getNome() === nome) {
            index = i;
            break;
        }
    }
    if(index !== -1) {
        const removida = this.pessoas.splice(index, 1)[0];
        console.log(`Pessoa ${removida.getNome()} removida com sucesso!`);
    } else {
        console.log(`Pessoa com nome ${nome} não encontrada.`);
    }
}

    public listar(): void {
        console.log("Lista de pessoas: ");
        this.pessoas.forEach(p => console.log(p.apresentar()));
    }
}