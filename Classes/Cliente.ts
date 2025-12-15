
import { Pessoa } from "./Pessoa";

export class Cliente extends Pessoa{

    private matricula: number;
    
    public constructor(nome?: string, sobrenome?: string, idade?: number, cpf?: string, matricula?: number){
    super(nome, sobrenome, idade, cpf);
    this.matricula = matricula || 0;

    }

    


    public apresentar(): string {

        return `${super.apresentar()}, minha matrícula: ${this.matricula}.`;

    }


}
 