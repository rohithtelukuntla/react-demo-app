import React, { useContext, useEffect } from 'react'
import { URL } from '../../Global';
import { Link } from "react-router-dom";
import { apiContext } from '../GlobalState';
import { Table,Button } from "reactstrap";

export default function UsersInfo() {
    let [usersInfo,dispatch]=useContext(apiContext);
    // console.log(users)
    let {users}=usersInfo;
    useEffect(()=>{
        fetch(URL).then(res=>res.json())
        .then((data)=>dispatch({type:"FETCH_USERS",payload:data}))
    },[dispatch]);
    let deleteUser=(id)=>{
        // console.log(id)
        fetch(URL+"/"+id,{
            method:"DELETE"
        }).catch(err=>console.log(err.message))
    }
  return (
    <>
    <Link to="/add" className='btn btn-primary'>AddUser</Link>
    
    <Table striped bordered hover>
        <tbody>
            <tr>
                <th>userId</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                <th>City</th>
                <th>Street</th>
                <th>Suite</th>
                <th>Zipcode</th>
                <th>Manage</th>
            </tr>
            {
                users?.map?.(user=>{
                       return <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.address?.city}</td>
                        <td>{user.address?.street}</td>
                        <td>{user.address?.suite}</td>
                        <td>{user.address?.zipcode}</td>
                        <td>
                            <Link className='btn btn-success' to={`/edit/${user.id}`}>Edit</Link>
                            <Button type="button" onClick={()=>deleteUser(user.id)} color="danger">Delete</Button>
                        </td>
                        
                       </tr> 
                })
            }
        </tbody>
      </Table>
      
      </>
  )
}
