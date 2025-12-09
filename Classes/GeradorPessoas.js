"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeradorPessoas = void 0;
var GeradorPessoas = /** @class */ (function () {
    function GeradorPessoas() {
        this.pessoas = [];
    }
    GeradorPessoas.prototype.inserirPessoa = function (pessoa) {
        this.pessoas.push(pessoa);
        console.log("Pessoa ".concat(pessoa.getNome(), " inserida com sucesso!"));
    };
    GeradorPessoas.prototype.remover = function (nome) {
        var index = -1;
        for (var i = 0; i < this.pessoas.length; i++) {
            if (this.pessoas[i].getNome() === nome) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            var removida = this.pessoas.splice(index, 1)[0];
            console.log("Pessoa ".concat(removida.getNome(), " removida com sucesso!"));
        }
        else {
            console.log("Pessoa com nome ".concat(nome, " n\u00E3o encontrada."));
        }
    };
    GeradorPessoas.prototype.listar = function () {
        console.log("Lista de pessoas: ");
        this.pessoas.forEach(function (p) { return console.log(p.apresentar()); });
    };
    return GeradorPessoas;
}());
exports.GeradorPessoas = GeradorPessoas;
