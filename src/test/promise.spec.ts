import { promiseFunction } from '../promise';
import { Database } from '../Singleton';

describe('Testando Jest', () => {
    it('Retorna null', () => {
        let x = null;
        expect(x).toBeNull();
    });
});

describe('Testando promiiseFunction', () => {
    it('Verifica se a promise retorna Array', async () => {
        let x = await promiseFunction();
        expect(Array.isArray(x)).toBe(true);
    });
});

describe('Testando jest.spyON', () => {
    it('Verifica se a função é chamada e o seu retorno', async () => {

        const spy = jest.spyOn(Database, 'getDatabase')
        const returnFunction = Database.getDatabase('localhost', 'lean', '1234')

        //Confere quantas vezes a função é chamada
        expect(spy).toHaveBeenCalledTimes(1)

        //Confere o valor dos argumentos passados na função
        expect(spy).toHaveBeenCalledWith('localhost', 'lean', '1234');

        //Verifica se a função retorna uma instancia
        expect(returnFunction).toBeInstanceOf(Database);
    });
});
