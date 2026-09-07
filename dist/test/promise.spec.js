"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = require("../promise");
const Singleton_1 = require("../Singleton");
describe('Testando Jest', () => {
    it('Retorna null', () => {
        let x = null;
        expect(x).toBeNull();
    });
});
describe('Testando promiiseFunction', () => {
    it('Verifica se a promise retorna Array', async () => {
        let x = await (0, promise_1.promiseFunction)();
        expect(Array.isArray(x)).toBe(true);
    });
});
describe('Testando jest.spyON', () => {
    it('Verifica se a função é chamada e o seu retorno', async () => {
        const spy = jest.spyOn(Singleton_1.Database, 'getDatabase');
        const returnFunction = Singleton_1.Database.getDatabase('localhost', 'lean', '1234');
        //Confere quantas vezes a função é chamada
        expect(spy).toHaveBeenCalledTimes(1);
        //Confere o valor dos argumentos passados na função
        expect(spy).toHaveBeenCalledWith('localhost', 'lean', '1234');
        //Verifica se a função retorna uma instancia
        expect(returnFunction).toBeInstanceOf(Singleton_1.Database);
    });
});
//# sourceMappingURL=promise.spec.js.map