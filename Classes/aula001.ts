

export class Empresa{

    public readonly nome: string;
    private readonly colaboradores: Colaborador[] = [];
    protected readonly cnpj: string;

    
    constructor(nome: string, cnpj: string){
        this.nome = nome;
        this.cnpj = cnpj;
    }

    
    public adicionaColaborador(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador)
        
    }



   public mostrarColaboradores(): void{

    for(const colaborador of this.colaboradores){
        console.log(colaborador);
    }
   }

}

export class Colaborador {

    constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
    ){}
}

const empresa1 = new Empresa("Udemy", "11.111.111/0001-85");
const colab1 = new Colaborador("Ibra", "Có");
const colab2 = new Colaborador("Maria", "Miranda");
const colab3 = new Colaborador("Marciania", "Có");

empresa1.adicionaColaborador(colab1)
empresa1.adicionaColaborador(colab2)
empresa1.adicionaColaborador(colab3)

console.log(empresa1)
console.log(empresa1.nome)
empresa1.mostrarColaboradores()

