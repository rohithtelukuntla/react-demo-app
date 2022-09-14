import React from 'react'
import { colorContext } from './Parent';
export default function Child3() {
  return (
    <colorContext.Consumer>
       {
           (res)=><div style={{background:res[2]}}>Child3</div>
       }
    </colorContext.Consumer>
  )
}
