import { Address } from "./Address";
import { Prototype } from "./interfaces/PrototypeInterface";


export class Person implements Prototype {

    public addresses: Address[] = [];

    constructor(public name: string, public age: number){ }

    clone(): this {

            // Cria um novo objeto com o mesmo protótipo
        const newObj = Object.create(Object.getPrototypeOf(this));
        // Copia as propriedades de 'this' para o novo objeto
        Object.assign(newObj, this);
        
        // IMPORTANTE: Para arrays/objetos, você precisa cloná-los manualmente
        newObj.addresses = [...this.addresses]; 
        
        return newObj;
        
    }

    addAdress(addres: Address): void {
        this.addresses.push(addres);
    }

}