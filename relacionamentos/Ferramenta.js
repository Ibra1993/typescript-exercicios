"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ferramenta = void 0;
var Ferramenta = /** @class */ (function () {
    function Ferramenta(_nome) {
        this._nome = _nome;
    }
    Object.defineProperty(Ferramenta.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    return Ferramenta;
}());
exports.Ferramenta = Ferramenta;
