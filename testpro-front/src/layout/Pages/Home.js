import React ,{ useEffect, useState } from 'react'
import axios from 'axios';

function Home() {
    const [users, setUsers]=useState([]);

    useEffect(()=> {
        loadUsers();
    },[]);
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    };

  return (
    <div className='container'>
        <div className='py-4'>
            <table className='table border shadow'>                
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>                
                <tbody>
                    {
                        users.map((user,index)=>(
                            <tr>
                                <th scope="row" key={user.id}>{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className="btn btn-primary mx-2">View</button>
                                    <button className="btn btn-outline-primary mx-2">Edit</button>
                                    <button className="btn btn-danger mx-2">Delete</button>
                                </td>
                       </tr> 
                        ))
                    }                                                   
                </tbody>
            </table>
        </div>  
    </div>
  )
}

export default Home;