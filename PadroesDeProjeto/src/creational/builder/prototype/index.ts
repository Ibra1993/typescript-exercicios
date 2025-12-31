import { Address } from "./Address";
import { Person } from "./Prototype";


const person1 = new Person('Ibra Có', 30);
const person2 = person1.clone();
const adress1 = new Address('Rua Siqueir Campos', 131);
person1.addAdress(adress1);




console.log(person1)
console.log(person2.name)


