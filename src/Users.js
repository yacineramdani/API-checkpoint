import React, {useState, useEffect} from 'react'

const Users = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then ((data) => {
            setData(data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    return (
        <ul>
            {data.map((user) => (
                <li key = {user.id}>{user.name}</li>
            ))}
        </ul>
    )
}

export default Users
