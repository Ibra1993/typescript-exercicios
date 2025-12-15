"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
var Personagem = /** @class */ (function () {
    function Personagem(nome, ataque, vida) {
        this.nome = nome;
        this.ataque = ataque;
        this.vida = vida;
    }
    Personagem.prototype.atacar = function (personagem) {
        // console.log(`${this.nome} está atacando...`);   
        this.bordao();
        personagem.perderVida(this.ataque);
    };
    Personagem.prototype.perderVida = function (forcarAtaque) {
        console.log("".concat(this.nome, " agora tem ").concat(this.vida, " de vida..."));
        this.vida -= forcarAtaque;
    };
    return Personagem;
}());
exports.Personagem = Personagem;
