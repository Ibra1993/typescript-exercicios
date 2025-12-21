"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
var Motor_1 = require("./Motor");
var Carro = /** @class */ (function () {
    function Carro() {
        this.motor = new Motor_1.Motor();
    }
    Carro.prototype.ligar = function () {
        this.motor.ligar();
    };
    Carro.prototype.acelerar = function () {
        this.motor.acelerar();
    };
    Carro.prototype.parar = function () {
        this.motor.parar();
    };
    Carro.prototype.desligar = function () {
        this.motor.desligar();
    };
    return Carro;
}());
exports.Carro = Carro;
