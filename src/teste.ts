export class Pessoa {
    private readonly nome: string;
    private readonly cpf: number;
    private readonly admin: boolean;

    constructor(nome: string, cpf: number, admin: boolean) {
        this.nome = nome;
        this.cpf = cpf;
        this.admin = admin;
    }

    public apresentar = () => {
        console.log('Eu me chamo ' + this.nome);
    };
}

//const Leandro = new Pessoa('Leandro', 18894805760, true);
//Leandro.apresentar();

/**************************  Type Function ******************************** */

export type Calc = (x: number, y: number) => number; //Criei um type function

//const multiplay: Calc = (x, y) => x * y; // Atribui o type na function
//const result: number = multiplay(7, 7); //Atribui o resultado na variável

//console.log('Resultado da função multiplay: ' + result);

/**************************** Type Simples ************************** */

export type Linguagens = 'Java' | 'C#' | 'TS';

//const MyLinguage: Linguagens = 'TS';

//console.log('Minha linguagem favorita é: ' + MyLinguage);

/****************************** Type Object************************* */

export type Cadastro = {
    Nome: string;
    Email: string;
    Senha: string;
};

/*
const Login: Cadastro = {
    Nome: 'Leandro',
    Email: 'teste@email.com',
    Senha: '1234',
};

const user: Cadastro = Login;

console.log(user);
*/

