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
exports.Guerreira = void 0;
var Personagem_1 = require("./Personagem");
var Guerreira = /** @class */ (function (_super) {
    __extends(Guerreira, _super);
    function Guerreira() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Guerreira.prototype.bordao = function () {
        console.log('GUERREIRAAAAA AOOOOO ATAAAAQUEEE!!!');
    };
    return Guerreira;
}(Personagem_1.Personagem));
exports.Guerreira = Guerreira;
