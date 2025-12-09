"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sobrenome, idade, cpf) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.cpf = cpf;
    }
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.getSobreNome = function () {
        return this.sobrenome;
    };
    Pessoa.prototype.getIdade = function () {
        return this.idade;
    };
    Pessoa.prototype.getCpf = function () {
        return this.cpf;
    };
    Pessoa.prototype.apresentar = function () {
        return "Ol\u00E1, meu nome \u00E9 ".concat(this.nome, ", sobrenome: ").concat(this.sobrenome, ", tenho ").concat(this.idade, " anos, e o meu CPF \u00E9: ").concat(this.cpf);
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
