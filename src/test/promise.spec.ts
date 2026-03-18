import { promiseFunction } from "../promise";

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
