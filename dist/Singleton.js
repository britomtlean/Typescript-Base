"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
class Database {
    host;
    user;
    password;
    static database = null;
    constructor(host, user, password) {
        this.host = host;
        this.user = user;
        this.password = password;
    }
    connect() {
        console.log(`Conexão bem sucedida! ${this.host}, ${this.user}, ${this.password}`);
    }
    static getDatabase(host, user, password) {
        if (this.database) {
            console.log('Já existe uma conexão');
            return this.database;
        }
        this.database = new Database(host, user, password); //Cria uma instancia dentro da classe
        console.log('Conexão criada com sucesso');
        return this.database;
    }
}
exports.Database = Database;
const con = Database.getDatabase('localhost', 'mtLean', '1234');
console.log(con);
const con1 = Database.getDatabase('localhost', 'mtLean', '123456789');
console.log(con1);
con1.connect();
//# sourceMappingURL=Singleton.js.map