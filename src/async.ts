type User = {
    id: number;
    name: string;
    age: number;
};

const getUsers = async (): Promise<Array<User>> => {
    const res = await fetch('/api/users');
    const data: User[] = await res.json();
    return data;
};
