import React, {useContext} from 'react';
import { usersContext } from './Context1';


export default function Context3() {
    const {users, deleteUser} = useContext(usersContext);

    return (
        <div>
            {users.map(user => {
                return (
                    <div key={user.id}>
                    <h1>{user.name}</h1>
                    <h2>{user.email}</h2>
                    <p>{user.id}</p>

                    <button onClick={()=>{
                        console.log(user.id)
                        deleteUser(user.id)
                    }}>DeleteUser</button>

                    <br></br>
                    <br></br>
                    <br></br>
                    </div>
                )
            })}
        </div>
    )
}
