type Moto = {
    marca: String;
    modelo: string;
    ano: number;
    titular?: string;
};

const motoNova: Moto = {
    marca: 'Yamaha',
    ano: 2026,
    modelo: 'Fazer',
};

//FUNÇÃO UTILIZANDO SPREAD REST
function comprarMoto(moto: Moto, titular: string): Moto {
    return { ...moto, titular: titular }; //RETORNA UM NOVO OBJETO COM OS DADOS DO TITULAR
}

console.log('Sua compra foi registra: ');
console.log(comprarMoto(motoNova, 'Leandro'));
