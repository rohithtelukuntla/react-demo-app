import React from 'react'
import { sampleContext } from './Parent';
export default function Child1() {
  return (
    <sampleContext.Consumer>
       {
           (res)=>console.log(res)
       }
    </sampleContext.Consumer>
  )
}
