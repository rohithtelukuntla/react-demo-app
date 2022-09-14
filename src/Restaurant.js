import React, { Component } from 'react'
import "./Restaurant.css"
export default class  Restaurant extends Component {
    render(){
        //console.log(this.props)
        let {details}=this.props;
        return (
            <div className='rs_card'>
            <div>{details.name}</div>
            <div>{details.neighborhood}</div>
            <div>{details.address}</div>
            <div>{details.cuisine_type}</div>
            
            

            </div>
        )
    }
}