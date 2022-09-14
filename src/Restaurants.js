import React, { Component } from 'react'
import Restaurant from './Restaurant';
import "./Restaurants.css";
export default class Restaurants extends Component {
    render() {
        //console.log(this.props)
        let {info}=this.props;
        return (
           <div className="rs_wrapper">
           {
            info.map((rinfo)=>{
                  return <div key={rinfo.id}>
                    <Restaurant details={rinfo}/>
                    </div>
            })
           }
           </div>
        )
    }
}