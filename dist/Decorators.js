"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Background = void 0;
let Background = class Background {
    cor;
    constructor(cor) {
        this.cor = cor;
    }
};
exports.Background = Background;
exports.Background = Background = __decorate([
    decorator,
    __metadata("design:paramtypes", [String])
], Background);
function decorator(target) {
    console.log('Executando  decorator');
    return class extends target {
        constructor(...args) {
            super(...args); // EXECUTA O CONSTRUTOR DA CLASSE MÃE
            this.cor = this.up(args[0]); //ALTERA O VALOR DO ATRIBUTO RECEBIDO PELA MÃE ATRAVÉS DO CONSTRUTOR
        }
        up(valor) {
            return valor.toUpperCase();
        }
    };
}
//
console.log('-------- USANDO CLASSE PRINCIPAL---------');
//
const ClasseGenerica = decorator(Background); //RECEBE A CLASSE GENÉRICA COM PARAMETROS DA CLASSE BACKGROUND
const bg = new ClasseGenerica('Green'); //INSTANCIA A CLASSE GENÉRICA
console.log(bg); //EXECUTA O CONSTRUTOR
//
console.log('-------- USANDO CLASSE PRINCIPAL---------');
//
const instanciaClassePrincipal = new Background('Green');
console.log(bg);
//# sourceMappingURL=Decorators.js.map