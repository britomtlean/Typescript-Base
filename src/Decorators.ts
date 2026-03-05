@decorator
export class Background{
    constructor(private cor: string){}
}

function decorator<T extends new (...args: any[]) => any >(target: T): T { //CRIA UM DECORATOR QUE RECEBE E RETORNA UMA CLASSE
    console.log('Executando  decorator')

    return class extends target { //CRIA E RETORNA UMA CLASSE GENÉRICA COM BASE NA CLASSE EXTENDIDA EM 'TARGET'

        constructor(...args: any[]){ //CRIA UMA CONSTRUTOR DA CLASSE GENÉRICA
            super(...args) // EXECUTA O CONSTRUTOR DA CLASSE MÃE
            this.cor = this.up(args[0]) //ALTERA O VALOR DO ATRIBUTO RECEBIDO PELA MÃE ATRAVÉS DO CONSTRUTOR
        }

        up(valor: string) : string {
            return valor.toUpperCase()
        }
    };
}



//
console.log('-------- USANDO CLASSE PRINCIPAL---------')
//

const ClasseGenerica = decorator(Background) //RECEBE A CLASSE GENÉRICA COM PARAMETROS DA CLASSE BACKGROUND
const bg = new ClasseGenerica('Green'); //INSTANCIA A CLASSE GENÉRICA
console.log(bg) //EXECUTA O CONSTRUTOR

//
console.log('-------- USANDO CLASSE PRINCIPAL---------')
//
const instanciaClassePrincipal = new Background('Green')
console.log(bg)
