"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const teste_1 = require("./teste");
//INSTANCIANDO CLASSE PESSOA E USANDO SEUS MÉTODOS
const Leandro = new teste_1.Pessoa('Leandro', 18894805760, true);
Leandro.apresentar();
/*************************************************************************** */
/************************** TIPAGEM DE ARROW FUNCTION ********************************/
const multiplay = (x, y) => x * y; // TIPAGEM POR TYPE *Calc*
const result = multiplay(7, 7);
console.log('Resultado: ' + result);
const division = (x, y) => x / y; // TIPAGEM DIRETA
/*************************FUNÇÃO QUE RETORNA ARRAY*********************** */
const criarArray = (...args) => {
    return args.map((array) => array.toUpperCase());
};
function criarArray2(...args) {
    return args.map((array) => array.toUpperCase());
}
;
const nomeMaisculo = criarArray('Leandro', 'MtLean', 'BriTs');
console.log("Primeiro array: " + nomeMaisculo[0]);
console.log("Todos os arrays: " + nomeMaisculo);
/************************************************************************** */
//IMPORTAÇÃO TYPE
const MyLinguage = 'TS';
console.log('Minha linguagem favorita é: ' + MyLinguage);
//IMPORTAÇÃO TYPE OBJECT
const Login = {
    Nome: 'Leandro',
    Email: 'teste@email.com',
    Senha: '1234',
};
const user = Login;
console.log(user);
/*************************** ARRAYS **************************** */
const numeros = [1, 2, 3, 4, 5];
const letras = ['a', 'b', 'c'];
console.log(numeros);
console.log(letras);
/*************************** OBJETOS ************************** */
const object = {
    //email se torna opcional
    nick: 'mtLean',
    idade: 25,
};
/*************************** TUPLAS **************************** */
let userTupla;
userTupla = ['Silva', 25, false];
console.log(userTupla[0]);
//# sourceMappingURL=index.js.map