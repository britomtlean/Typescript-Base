"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getUsers = async () => {
    const res = await fetch('/api/users');
    const data = await res.json();
    return data;
};
//# sourceMappingURL=async.js.map