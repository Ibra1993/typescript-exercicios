"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Pessoa_1 = require("./Pessoa");
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(nome, sobrenome, idade, cpf, matricula) {
        var _this = _super.call(this, nome, sobrenome, idade, cpf) || this;
        _this.matricula = matricula;
        return _this;
    }
    Cliente.prototype.apresentar = function () {
        return "".concat(_super.prototype.apresentar.call(this), ", minha matr\u00EDcula: ").concat(this.matricula, ".");
    };
    return Cliente;
}(Pessoa_1.Pessoa));
exports.Cliente = Cliente;
