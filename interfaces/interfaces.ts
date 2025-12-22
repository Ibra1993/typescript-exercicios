
interface TipoNome {
    nome: string;
};

interface TipoSobrenome {
    sobrenome: string;
};

interface TipoNomeCompleto {
    nomeCompleto: () => string;
};


export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {

    constructor(public nome: string, public sobrenome: string){ }

    nomeCompleto(): string {
        return this.nome + " " + this.sobrenome;
    }


}

const pessoa = new Pessoa("Luiz", "Miranda");
const retorna = pessoa.nomeCompleto();
console.log(retorna);


