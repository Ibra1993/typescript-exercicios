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
exports.Caneta = void 0;
var Ferramenta_1 = require("./Ferramenta");
var Caneta = /** @class */ (function (_super) {
    __extends(Caneta, _super);
    function Caneta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Caneta.prototype.escrever = function () {
        console.log("".concat(this.nome, " est\u00E1 escrevendo..."));
    };
    return Caneta;
}(Ferramenta_1.Ferramenta));
exports.Caneta = Caneta;
