import React, { Component } from 'react'

export default class OrderDetails extends Component {
  render() {
    console.log(this.props)
    return (
      <ul>
        <li>{this.props.name}</li>
        <li>{this.props.size}</li>
        <li>{this.props.quantity}</li>
      </ul>
    )

  }
}
