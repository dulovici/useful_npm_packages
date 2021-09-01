import React, {useEffect} from 'react';
import axios from 'axios';

export function AxiosApi() {

    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res => res.json())
    // .then(data => console.log(data))

    
    useEffect(()=> {
        axios('https://jsonplaceholder.typicode.com/users')
        .then(data => console.log(data.data[0]))
    },[])

    

    return (
        <div>
            <h1>Axios</h1>
        </div>
    )
}


