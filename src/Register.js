import React, { Component } from 'react'

export default class Register extends Component {
    state={};
  render() {
    return (
      <div>
        <div>
            <label htmlFor='first'>FirstName</label>
            <input type="text" name="first" id="first" className='form-control' onChange={this.handleChange}/>
            
        </div>
        <div>
            <label htmlFor='last'>LastName</label>
            <input type="text" name="last" id="last" className='form-control' onChange={this.handleChange}/>
            
        </div>
        <div>
            <label htmlFor='user'>UserName</label>
            <input type="text" name="user" id="user" className='form-control' onChange={this.handleChange}/>
            
        </div>
        <div>
            <button type='button' className='btn btn-success' onClick={this.fetchFormData}>Register</button>
        </div>
      </div>
    )
  }
  fetchFormData=()=>{
    console.log(this.state)
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
    console.log(this.state)
  }
}
