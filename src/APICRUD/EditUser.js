import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
//import { fetchUserById } from './Apicalls';

export default function EditUser() {
    let params= useParams();
    let navigation=useNavigate()
    console.log(params)
    let [user,setUser]=useState([]);
    useEffect(()=>{
      fetch("http://localhost:3500/users/"+params.uid).then(res=>res.json())
      .then(data=>setUser(data))
  },[params.uid]);
  console.log(user);
    let handleSubmit=()=>{
      user={...user,address:{
        city:user.city || user.address.city,
        street:user.street || user.address.street,
        zipcode:user.zipcode || user.address.zipcode,
      }};
      let {city,street,zipcode,...updatedInfo}=user;
      console.log(updatedInfo)
      fetch("http://localhost:3500/users/"+updatedInfo.id,{
        method:"PUT",
        body:JSON.stringify(updatedInfo),
        headers:{"content-type":"application/json"}
      }).then(()=>{navigation("/")})
      .catch(err=>console.log(err))
    }
    let handleChange=(e)=>{
        //console.log(e.target.name+":"+e.target.value)
        setUser({...user,[e.target.name]:e.target.value})
    }
  return (
    <div className='card'>
      <div className='card-header'>EditUser</div>
      <div className='card-body'>
        <div>
            <label htmlFor="uid">UserId</label>
            <input type="text" name="id" id="uid" className='form-control' defaultValue={user.id} disabled/>
        </div>
        <div>
             <label htmlFor="uname">Name</label>
             <input type="text" name="name" id="uname" className='form-control' defaultValue={user.name} disabled/>
        </div>
        <div>
            <label htmlFor="user">UserName</label>
            <input type="text" name="username" id="user" className='form-control' defaultValue={user.username} disabled/>
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="mail" className='form-control' defaultValue={user.email} disabled/>
        </div>
        <div>
            <label htmlFor="ucity">City</label>
            <input type="text" name="city" id="ucity" className='form-control'  defaultValue={user.address?.city} onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="ustr">Street</label>
            <input type="text" name="street" id="ustr" className='form-control'  defaultValue={user.address?.street} onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="zipcode">Zipcode</label>
            <input type="text" name="zipcode" id="zipcode" className='form-control'  defaultValue={user.address?.zipcode} onChange={handleChange}/>
        </div>
        <div>
          <button type="button" className='btn btn-warning' onClick={handleSubmit}>UpdateUser</button>
        </div>
    </div>
  </div>
  )
}
