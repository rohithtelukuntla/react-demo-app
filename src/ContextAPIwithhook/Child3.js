import React, {  useContext } from 'react'
import { colorContext } from './Parent';
export default function Child3() {
  let colors=useContext(colorContext)
  return (
     <div style={{background:colors[2]}}>Child3</div>
  )
}
