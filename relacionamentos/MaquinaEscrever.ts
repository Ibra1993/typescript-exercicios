import { Ferramenta } from "./Ferramenta";


export class MaquinaEscrever extends Ferramenta {

    escrever(): void {
        console.log(`${this.nome} está digitando ...`);
    }

}