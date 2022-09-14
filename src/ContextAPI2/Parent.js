import React from 'react'
import { createContext } from 'react'
import Child1 from './Child1'
import Child3 from './Child2'
import Child2 from './Child3'
export let colorContext = createContext("")
export default function Parent() {
  return (
    <colorContext.Provider value={["red","green","blue"]}>
        <Child1/>
        <Child2/>
        <Child3/>
    </colorContext.Provider>
    
  )
}
