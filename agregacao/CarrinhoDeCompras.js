"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrinhoDeCompras = void 0;
var CarrinhoDeCompras = /** @class */ (function () {
    function CarrinhoDeCompras() {
        this.produtos = [];
    }
    CarrinhoDeCompras.prototype.inserirProdutos = function () {
        var produtos = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            produtos[_i] = arguments[_i];
        }
        for (var _a = 0, produtos_1 = produtos; _a < produtos_1.length; _a++) {
            var produto = produtos_1[_a];
            this.produtos.push(produto);
        }
    };
    CarrinhoDeCompras.prototype.quantidadeProdutos = function () {
        return this.produtos.length;
    };
    return CarrinhoDeCompras;
}());
exports.CarrinhoDeCompras = CarrinhoDeCompras;
