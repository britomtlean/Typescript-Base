"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const motoNova = {
    marca: 'Yamaha',
    ano: 2026,
    modelo: 'Fazer',
};
//FUNÇÃO UTILIZANDO SPREAD REST
function comprarMoto(moto, titular) {
    return { ...moto, titular: titular }; //RETORNA UM NOVO OBJETO COM OS DADOS DO TITULAR
}
console.log('Sua compra foi registra: ');
console.log(comprarMoto(motoNova, 'Leandro'));
//# sourceMappingURL=spread.js.map