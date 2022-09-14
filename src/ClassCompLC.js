import React, { Component } from 'react'

export default class ClassCompLC extends Component {
    state={count:0};
    fname;
    constructor(){
        super();
        this.fname='Rohith'
        console.log("constructor")
    }
  render() {
    console.log("render")
    return (
        <>
        <h2>count {this.state.count}</h2>
    <div>ClassCompLC</div>
    <button type="button" onClick={this.updateState}>ClickMe</button>
    </>
  )
}
componentDidMount(){
    console.log("componentDidMount"); 
    }
updateState=()=>{
    console.log(this.state)
    this.setState({count:this.state.count+1})
}
componentDidUpdate(){
    console.log("componentDidUpdate")
}
}


