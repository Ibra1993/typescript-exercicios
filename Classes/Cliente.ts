
import { Pessoa } from "./Pessoa";

export class Cliente extends Pessoa{

    private matricula: number;
    
    public constructor(nome: string, sobrenome: string, idade: number, cpf: string, matricula: number){
    super(nome, sobrenome, idade, cpf);
    this.matricula = matricula;

    }


    public apresentar(): string {

        return `${super.apresentar()}, minha matrícula: ${this.matricula}.`;

    }


}
 