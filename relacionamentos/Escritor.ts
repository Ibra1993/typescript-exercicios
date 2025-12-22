import { Ferramenta } from "./Ferramenta";

export class Escritor {

    private _ferramenta: Ferramenta | null = null;

    constructor(private _nome: string){ }

    get nome(): string {
        return this._nome;
    }

    set ferramenta(ferramenta: Ferramenta | null){

        this._ferramenta = ferramenta;
    }

    get ferramenta(): Ferramenta | null {

        return this._ferramenta;

    }

    escrever(): void {

        if(this._ferramenta === null) {

            console.log('Não posso escrever sem ferramenta...');
            return;
       
        }
        
        this._ferramenta.escrever();
    }


   

}