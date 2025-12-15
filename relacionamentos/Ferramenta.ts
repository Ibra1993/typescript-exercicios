

export abstract class Ferramenta {

    constructor (private _nome: string) { }
     abstract escrever(): void;

     get nome(): string {
         return this._nome;
     }

    
}