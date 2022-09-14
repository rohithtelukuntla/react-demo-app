import { BrowserRouter,Routes,Route } from "react-router-dom";
import React from 'react'
// import UsersInfo from "./components/UsersInfo";
import EditUser from "./components/EditUser";
import AddUser from "./components/AddUser";
import Counter from "./components/Counter";

export default function RouterConfig() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Counter/>}/>
        <Route path="/edit/:id" element={<EditUser/>}/>
        <Route path="/add" element={<AddUser/>}/>
    </Routes>
    </BrowserRouter>
  )
}
