
import { Cliente } from "./Cliente";
import {GeradorPessoas} from './GeradorPessoas'
import { Pessoa } from "./Pessoa";


const ciente1 = new Cliente ("Barlsessi", "Có", 23, "000.090.000-54", 2018116025);
const pessoa1 = new Pessoa("Lugó", "Turma de amendoim", 44, "999.090.000-00")

const gerador = new GeradorPessoas();
gerador.inserirPessoa(pessoa1);


console.log(gerador.listar);
console.log(ciente1.apresentar())
