import { Caneta } from "./Caneta";
import { Escritor } from "./Escritor";
import { MaquinaEscrever } from "./MaquinaEscrever";


const escritor = new Escritor('Luiz');
const caneta = new Caneta('Bic');
const maquinaEscrever = new MaquinaEscrever('Xerox');

 console.log(escritor.nome)
 console.log(caneta.nome)
 console.log(maquinaEscrever.nome)

 escritor.ferramenta = caneta;
 escritor.escrever();
