"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promiseFunction = void 0;
const promiseFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: 'Leandro', age: 25 },
                { id: 2, name: 'Maria', age: 30 },
            ]);
        }, 1000);
    });
};
exports.promiseFunction = promiseFunction;
(0, exports.promiseFunction)().then((data) => {
    console.log(data);
});
//# sourceMappingURL=promise.js.map