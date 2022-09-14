import React, { useState } from 'react'

export default function UseStateHook() {
    //console.log(useState(0))
    let [count,setCount]=useState(0);
  return (
    <div><h1>Count {count}</h1>
    <button type="button" onClick={()=>setCount(count+1)}>Increment</button>
    <button type="button" onClick={()=>setCount(count-1)}>Decrement</button>
    <button type="button" onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}


