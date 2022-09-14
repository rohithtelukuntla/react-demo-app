import React from 'react'
import { colorContext } from './Parent';
export default function Child2() {
  return (
    <colorContext.Consumer>
       {
           (res)=><div style={{background:res[1]}}>Child2</div>
       }
    </colorContext.Consumer>
  )
}
