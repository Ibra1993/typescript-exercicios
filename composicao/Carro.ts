import { Motor } from "./Motor";

export class Carro {

    private readonly motor = new Motor();


      ligar(): void {
        this.motor.ligar();
    }

    acelerar(): void {
      this.motor.acelerar();
    }

    parar(): void {
        this.motor.parar();
    }

    desligar(): void{
        this.motor.desligar()
    }
    
}