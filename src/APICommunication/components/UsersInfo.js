import React, { Component } from 'react'

export default class UsersInfo extends Component {
    state={users:[]};
    render() {
        //console.log(this.state.users)
        let {users}=this.state;    
        return (
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
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                            <td>{user.address.street}</td>
                            <td>{user.address.zipcode}</td>

                        </tr>
                    })
                }
            </tbody>
        </table>
    )
  }
  componentDidMount(){
    fetch(" http://localhost:3500/users",{method:"get"}).then((res)=>res.json())
    .then((data)=>this.setState({users:data}))
  }
}
