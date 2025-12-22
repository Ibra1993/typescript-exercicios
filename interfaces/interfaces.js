"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
;
;
;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    Pessoa.prototype.nomeCompleto = function () {
        return this.nome + " " + this.sobrenome;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
var pessoa = new Pessoa("Luiz", "Miranda");
var retorna = pessoa.nomeCompleto();
console.log(retorna);
