import React, { useContext, useEffect } from 'react'
import { useParams,useNavigate } from "react-router-dom";
import { URL } from '../../Global';
import { apiContext } from '../GlobalState';
import styled from "styled-components";

export default function EditUser() {
    
    const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: blue;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;
    let [users,dispatch]=useContext(apiContext)
    let params=useParams();
    let navigate=useNavigate();
    let {user}=users;
    console.log(user)
    useEffect(()=>{
        fetch(URL+"/"+params.id).then(res=>res.json())
        .then(data=>dispatch({type:"FETCH_USER",payload:data}))
    },[dispatch,params.id]);
    let handleChange=(e)=>{
         user={...user,[e.target.name]:e.target.value};   
    }
    let handleSubmit=()=>{

        // delete users.user;
        user={...user,address:{
            city:user.city || user.address.city,
            street:user.street || user.address.street,
            suite:user.suite || user.address.suite,
            zipcode:user.zipcode || user.address.zipcode,
        }};
        let {city,street,suite,zipcode,...updatedInfo}=user;
        fetch(URL+"/"+updatedInfo.id,{
            method:"PUT",
            body:JSON.stringify(updatedInfo),
            headers:{"content-type":"application/json"}
        }).then(()=>{
            delete users.user;
            navigate("/");
        }).catch(err=>console.log(err.message))
        
    }
  return (
    <div className='card'>
        <div className='card-header'>EditUserInformation</div>
        <div className='card-body'>
        <div>
            <label htmlFor="uid">UserId</label>
            <Input type="text" name="id" id="uid"  defaultValue={user?.id} disabled/>
        </div>
        <div>
            <label htmlFor="uname">Name</label>
            <Input type="text" name="name" id="uname"  defaultValue={user?.name} disabled/>
        </div>
        <div>
            <label htmlFor="user">UserName</label>
            <Input type="text" name="username" id="user"  defaultValue={user?.username} disabled/>
        </div>
        <div>
            <label htmlFor="mail">Email</label>
            <Input type="text" name="email" id="mail"  defaultValue={user?.email} disabled/>
        </div>
        <div>
            <label htmlFor="ucity">City</label>
            <Input type="text" name="city" id="ucity"  defaultValue={user?.address?.city} onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="ustr">Street</label>
            <Input type="text" name="street" id="ustr"  defaultValue={user?.address?.street} onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="usuit">Suite</label>
            <Input type="text" name="suite" id="usuit"  defaultValue={user?.address?.suite} onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="zip">zipcode</label>
            <Input type="text" name="zipcode" id="zip"  defaultValue={user?.address?.zipcode} onChange={handleChange}/>
        </div>
        <div>
            <Button type="button" onClick={handleSubmit}>UpdateUser</Button>
        </div>
        </div>
    </div>
  )
}
