/** @type {import('jest').Config} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',

    // Onde o Jest vai procurar testes
    testMatch: ['**/?(*.)+(spec|test).ts'],

    // Ignorar build
    modulePathIgnorePatterns: ['<rootDir>/dist'],

    // Suporte a imports absolutos (opcional)
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },

    // Limpa mocks automaticamente
    clearMocks: true,
};
