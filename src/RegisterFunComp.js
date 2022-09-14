import React, { useState } from 'react'

export const RegisterFunComp = () => {
    //console.log(useState({}))//useState(initialstate)
    let [formField,setFormField]=useState({});//array destructor
    let handleChange=(e)=>{
        //console.log(e.target.name+":"+e.target.value);
        setFormField({...formField,[e.target.name]:e.target.value})
    }
    let handleSubmit=()=>{
        console.log(formField)

    }
  return (
    <div><div>
       <label htmlFor='first'>FirstName</label>
       <input type="text" name="first" id="first" className='form-control' onChange={handleChange}/>
            
        </div>
        <div>
            <label htmlFor='last'>LastName</label>
            <input type="text" name="last" id="last" className='form-control' onChange={handleChange}/>
            
        </div>
        <div>
            <label htmlFor='user'>UserName</label>
            <input type="text" name="user" id="user" className='form-control' onChange={handleChange}/>
            
        </div>
        <div>
            <button type='button' className='btn btn-success' onClick={handleSubmit}>Register</button>
        </div>
        </div>
      
    )
}
