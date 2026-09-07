export declare class Database {
    private host;
    private user;
    private password;
    private static database;
    private constructor();
    connect(): void;
    static getDatabase(host: string, user: string, password: string): Database;
}
//# sourceMappingURL=Singleton.d.ts.map