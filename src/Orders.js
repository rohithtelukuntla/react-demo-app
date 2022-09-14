import React, { Component } from 'react'
import Order from "./order";
export default class Orders extends Component {
  render() {
    return (
      <Order name="Pizza" size="medium" quantity={5}/>
    )
  }
}
