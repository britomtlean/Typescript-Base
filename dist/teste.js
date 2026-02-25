"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    nome;
    cpf;
    admin;
    constructor(nome, cpf, admin) {
        this.nome = nome;
        this.cpf = cpf;
        this.admin = admin;
    }
    apresentar = () => {
        console.log('Eu me chamo ' + this.nome);
    };
}
exports.Pessoa = Pessoa;
/*
const Login: Cadastro = {
    Nome: 'Leandro',
    Email: 'teste@email.com',
    Senha: '1234',
};

const user: Cadastro = Login;

console.log(user);
*/
//# sourceMappingURL=teste.js.map