import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddUser() {
    let addInfo={};
    let navigate=useNavigate()
    let handleChange=(e)=>{
        //object construtor
        addInfo={...addInfo,[e.target.name]:e.target.value}
    }
    let handleSubmit=()=>{
        //object constructor
        addInfo={...addInfo,address:{
            city:addInfo.city,
            street:addInfo.street,
            zipcode:addInfo.zipcode
        }}
        //object destructor
        let{city,street,zipode,...addUserInfo}=addInfo
        console.log(addUserInfo)
        fetch("http://localhost:3500/users",{
            method:"POST",
            body:JSON.stringify(addUserInfo),
            headers:{"content-type":"application/json"}
        }).then(()=>navigate("/")).catch(err=>console.log(err));
    }
  return (
    <div className='card'>
      <div className='card-header'>AddUser</div>
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
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="mail" className='form-control' onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="ucity">City</label>
            <input type="text" name="city" id="ucity" className='form-control'  onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="ustr">Street</label>
            <input type="text" name="street" id="ustr" className='form-control'  onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="zipcode">Zipcode</label>
            <input type="text" name="zipcode" id="zipcode" className='form-control' onChange={handleChange}/>
        </div>
        <div>
          <button type="button" className='btn btn-warning' onClick={handleSubmit}>AddUser</button>
        </div>
    </div>
  </div>
  )
}
