//action is used to transfer data from component to reducer
//action(objectliteral)
//reducer describes state changes based on the type of action 
//reducer is a pure function  contains 2 arguments(state,action)

import React, { useReducer } from 'react';
import { countReducer } from './Reducers/countReducer';

export default function UseReducerHook() {
     console.log(useReducer(countReducer,0)); 
     let [count,dispatch]=useReducer(countReducer,0);
   return (
    <div><h2>Count{count}</h2>
    <button type="button" onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
    <button type="button" onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
    <button type="button" onClick={()=>dispatch({type:"RESET"})}>Reset</button>
  </div>
   )
}
