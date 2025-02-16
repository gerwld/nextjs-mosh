
interface IUser {
    id: number;
    name: string;
}

const UsersPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        cache:"no-store",
        // next: {revalidate: 10} // 10 sec caching before revalidation
    });
    const data: IUser[] = await res.json();
    return (
        <>
            <h1>Users</h1>
            <p>{new Date().toLocaleTimeString()}</p>
            <ul>
                {data.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </>
    )
}

export default UsersPage