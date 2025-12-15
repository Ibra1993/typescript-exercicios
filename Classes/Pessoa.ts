
export class Pessoa{

    private nome: string;
    private sobrenome: string;
    private idade: number;
    private cpf: string;


    constructor(nome: string = "", sobrenome: string = "", idade: number = 0, cpf: string = ""){
         this.nome = nome;
         this.sobrenome = sobrenome;
         this.idade = idade;
         this.cpf = cpf;

    }


    public getNome(): string{
        return this.nome;
    }

    public getSobreNome(): string{
        return this.sobrenome;
    }
    

   public getIdade(): number{
    return this.idade;
   }

   public getCpf(): string{
    return this.cpf;
   }

   public apresentar(): string{

    return `Olá, meu nome é ${this.nome}, sobrenome: ${this.sobrenome}, tenho ${this.idade} anos, e o meu CPF é: ${this.cpf}`;
   }


    
}


