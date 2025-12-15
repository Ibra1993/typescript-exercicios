import { Ferramenta } from "./Ferramenta";

export class Caneta extends Ferramenta {


    escrever(): void {
        console.log(`${this.nome} está escrevendo...`);
    }
}