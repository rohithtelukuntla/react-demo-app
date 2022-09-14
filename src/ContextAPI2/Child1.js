import React from 'react'
import { colorContext } from './Parent';
export default function Child1() {
  return (
    <colorContext.Consumer>
       {
           (res)=><div style={{background:res[0]}}>Child1</div>
       }
    </colorContext.Consumer>
  )
}
