import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
//import { fetchUsers,deleteUserById } from './Apicalls';

export default function UserDetails() {
    let [users,setUsers]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3500/users").then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    //console.log(users);
    let deleteUser=(id)=>{
        fetch("http://localhost:3500/users/"+id,{
            method:"DELETE"
    }).catch(err=>console.log(err))
    }
   
  return (
    <>
    <Link to="/add" className='btn btn-primary'>AddUser</Link>
    <div className="table-responsive">
    <table className='table table-bordered table-striped'>
            <tbody>
                <tr>
                    <th>userId</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Street</th>
                    <th>Zipcode</th>
                </tr>
                {
                    users.map(user=>{
                        return <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.emil}</td>
                            <td>{user.address.city}</td>
                            <td>{user.address.street}</td>
                            <td>{user.address.zipcode}</td>
                            <td>
                                <Link className='btn btn-success' to={`/edit/${user.id}`}>Edit</Link>
                                <button type="button" className='btn btn-danger' onClick={()=>deleteUser(user.id)}>Delete</button>
                            </td>

                        </tr>
                    })
                }
            </tbody>
        </table>
        </div>
        </>
  )
}
