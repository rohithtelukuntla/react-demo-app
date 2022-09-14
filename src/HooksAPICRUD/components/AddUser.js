import React from 'react'
import {useNavigate } from "react-router-dom";
import { headers, URL } from '../../Global';

export default function AddUser() {
    let navigate=useNavigate();
    let user={};
    
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
        let {city,street,suite,zipcode,...addInfo}=user;

        fetch(URL,{
            method:"POST",
            body:JSON.stringify(addInfo),
            headers:headers
        }).then(()=>{
            navigate("/");
        }).catch(err=>console.log(err.message))
        
    }
  return (
    <div className='card'>
        <div className='card-header'>AddUserInformation</div>
        <div className='card-body'>
        
        <div>
            <label htmlFor="uname">Name</label>
            <input type="text" name="name" id="uname" className='form-control' onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="user">UserName</label>
            <input type="text" name="username" id="user" className='form-control' onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="mail">Email</label>
            <input type="text" name="email" id="mail" className='form-control' onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="ucity">City</label>
            <input type="text" name="city" id="ucity" className='form-control' onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="ustr">Street</label>
            <input type="text" name="street" id="ustr" className='form-control' onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="usuit">Suite</label>
            <input type="text" name="suite" id="usuit" className='form-control' onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="zip">zipcode</label>
            <input type="text" name="zipcode" id="zip" className='form-control' onChange={handleChange}/>
        </div>
        <div>
            <button type="button" className='btn btn-warning' onClick={handleSubmit}>AddUser</button>
        </div>
        </div>
    </div>
  )
}
