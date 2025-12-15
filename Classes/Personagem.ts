
export abstract class Personagem {

    constructor (protected nome: string, protected ataque: number, protected vida: number){ }

    atacar(personagem: Personagem): void {
        
    console.log(`${this.nome} está atacando...`);   
    personagem.perderVida(this.ataque);

    }

    perderVida(forcarAtaque: number) : void {
      
        console.log(`${this.nome} agora tem ${this.vida} de vida...`)
        this.vida -= forcarAtaque;
    }

   abstract bordao(): void;

        

    
}