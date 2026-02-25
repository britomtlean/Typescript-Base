export class Database {
    private static database: Database | null = null;

    private constructor
    (
        private host: string,
        private user: string,
        private password: string
    ) {}

    connect(): void {
        console.log(`Conexão bem sucedida! ${this.host}, ${this.user}, ${this.password}`);
    }

    static getDatabase(host: string, user: string, password: string): Database
    {
        if(this.database){
            console.log('Já existe uma conexão')
            return this.database
        }
        this.database = new Database(host, user, password); //Cria uma instancia dentro da classe
        console.log('Conexão criada com sucesso')
        return this.database
    }
}

const con = Database.getDatabase('localhost', 'mtLean', '1234');
console.log(con)
const con1 = Database.getDatabase('localhost', 'mtLean', '123456789');
console.log(con1)
con1.connect();
