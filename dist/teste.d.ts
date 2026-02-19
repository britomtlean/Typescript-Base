export declare class Pessoa {
    private readonly nome;
    private readonly cpf;
    private readonly admin;
    constructor(nome: string, cpf: number, admin: boolean);
    apresentar: () => void;
}
/**************************  Type Function ******************************** */
export type Calc = (x: number, y: number) => number;
/**************************** Type Simples ************************** */
export type Linguagens = 'Java' | 'C#' | 'TS';
/****************************** Type Object************************* */
export type Cadastro = {
    Nome: string;
    Email: string;
    Senha: string;
};
//# sourceMappingURL=teste.d.ts.map