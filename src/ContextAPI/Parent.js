import React from 'react'
import { createContext } from 'react'
import Child1 from './Child1'
import Child3 from './Child2'
import Child2 from './Child3'
export let sampleContext = createContext("")
export default function Parent() {
  return (
    <sampleContext.Provider value="contextIntro">
        <Child1/>
        <Child2/>
        <Child3/>
    </sampleContext.Provider>
    
  )
}
