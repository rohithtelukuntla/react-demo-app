import React, { createContext, useReducer } from 'react'

import { apiReducer } from './Reducers/apiReducer';
import RouterConfig from './RouterConfig';
export let apiContext=createContext("");
export default function GlobalState() {
    let [users,dispatch]=useReducer(apiReducer,[])
  return (
        <apiContext.Provider value={[users,dispatch]}>
            <RouterConfig/>
        </apiContext.Provider>
  )
}
