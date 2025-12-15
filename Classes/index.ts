
import { Cliente } from "./Cliente";
import {GeradorPessoas} from './GeradorPessoas'
import { Pessoa } from "./Pessoa";
import  { Guerreira } from "./Guerreira";
import { Monstro } from "./Monstro";


const pess = new Pessoa();

const ciente1 = new Cliente ("Barlsessi", "Có", 23, "000.090.000-54", 2018116025);
const pessoa1 = new Pessoa("Lugó", "Turma de amendoim", 44, "999.090.000-00");



const gerador = new GeradorPessoas();
gerador.inserirPessoa(pessoa1);


console.log(gerador.listar);
console.log(ciente1.apresentar())

const guerreira = new Guerreira("Guerreira", 100, 1000);
const monstro = new Monstro("Monstro", 87, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);


monstro.atacar(guerreira)
