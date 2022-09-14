import React, {  useContext } from 'react'
import { colorContext } from './Parent';
export default function Child2() {
  let colors=useContext(colorContext)
  return (
     <div style={{background:colors[1]}}>Child2</div>
  )
}
