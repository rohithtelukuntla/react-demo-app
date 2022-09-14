import React, {  useContext } from 'react'
import { colorContext } from './Parent';
export default function Child1() {
  let colors=useContext(colorContext)
  return (
     <div style={{background:colors[0]}}>Child1</div>
  )
}
