import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Context2 from './Context2';


export const usersContext = React.createContext();
const UserProvider = usersContext.Provider;


export  function Context1() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setUsers(res.data))
    },[])

    // Delete user
    const deleteUser = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => console.log(res))
    }

    useEffect(()=>{
        axios.delete('https://jsonplaceholder.typicode.com/users/1')
            .then(res => console.log(res))
    },[])
    
    
    return (
        <UserProvider value={{users, deleteUser}}>
            <div>
                <Context2 />
            </div>
        </UserProvider>
    )
}
