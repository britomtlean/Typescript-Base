import { Pessoa } from './teste';
import type { Calc, Linguagens, Cadastro } from './teste.js';

//INSTANCIANDO CLASSE PESSOA E USANDO SEUS MÉTODOS
const Leandro = new Pessoa('Leandro', 18894805760, true);
Leandro.apresentar();

/*************************************************************************** */

/************************** TIPAGEM DE ARROW FUNCTION ********************************/

const multiplay: Calc = (x, y) => x * y; // TIPAGEM POR TYPE *Calc*
const result: number = multiplay(7, 7);

console.log('Resultado: ' + result);

const division: (x: number, y: number) => number = (x, y) => x / y; // TIPAGEM DIRETA


/*************************FUNÇÃO QUE RETORNA ARRAY*********************** */

const criarArray = (...args: Array<string>): Array<string> => {
    return args.map((array) => array.toUpperCase());
};

function criarArray2(...args: Array<string>): Array<string>  {
    return args.map((array) => array.toUpperCase());
};

const nomeMaisculo: Array<String> = criarArray('Leandro', 'MtLean', 'BriTs');

console.log("Primeiro array: "+nomeMaisculo[0]);
console.log("Todos os arrays: "+nomeMaisculo);


/************************************************************************** */

//IMPORTAÇÃO TYPE
const MyLinguage: Linguagens = 'TS';
console.log('Minha linguagem favorita é: ' + MyLinguage);

//IMPORTAÇÃO TYPE OBJECT
const Login: Cadastro = {
    Nome: 'Leandro',
    Email: 'teste@email.com',
    Senha: '1234',
};

const user: Cadastro = Login;
console.log(user);

/*************************** ARRAYS **************************** */

const numeros: Array<number> = [1, 2, 3, 4, 5];
const letras: string[] = ['a', 'b', 'c'];

console.log(numeros);
console.log(letras);

/*************************** OBJETOS ************************** */

const object: { nick: string; idade: number; email?: string } = {
    //email se torna opcional
    nick: 'mtLean',
    idade: 25,
};


/*************************** TUPLAS **************************** */

let userTupla: [string, number, boolean];

userTupla = ['Silva', 25, false];
console.log(userTupla[0]);
