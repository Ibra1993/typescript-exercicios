"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Escritor = void 0;
var Escritor = /** @class */ (function () {
    function Escritor(_nome) {
        this._nome = _nome;
        this._ferramenta = null;
    }
    Object.defineProperty(Escritor.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Escritor.prototype, "ferramenta", {
        get: function () {
            return this._ferramenta;
        },
        set: function (ferramenta) {
            this._ferramenta = ferramenta;
        },
        enumerable: false,
        configurable: true
    });
    Escritor.prototype.escrever = function () {
        if (this._ferramenta === null) {
            console.log('Não posso escrever sem ferramenta...');
            return;
        }
        this._ferramenta.escrever();
    };
    return Escritor;
}());
exports.Escritor = Escritor;
