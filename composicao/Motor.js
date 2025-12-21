"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motor = void 0;
var Motor = /** @class */ (function () {
    function Motor() {
    }
    Motor.prototype.ligar = function () {
        console.log("Motor está ligando...");
    };
    Motor.prototype.acelerar = function () {
        console.log("MOtoir está acelerando...");
    };
    Motor.prototype.parar = function () {
        console.log("Motor está parando...");
    };
    Motor.prototype.desligar = function () {
        console.log("Motor está desligando ...");
    };
    return Motor;
}());
exports.Motor = Motor;
