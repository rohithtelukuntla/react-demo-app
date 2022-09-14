import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import React from 'react'
import  Home  from "./Home";
import  Profile  from "./Profile";
import  Services  from "./Services";
import  PageNotFound  from "./PageNotFound";
export default function RouteConfig() {
  return (
    <BrowserRouter>
    <Link to="/">Home</Link><br/>
    <Link to="/profile">Profile</Link><br/>
    <Link to="/services/training">Services</Link>
    
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/services/training" element={<Services/>}/>
      <Route path="/*" element={<PageNotFound/>}/>
      </Routes>
      </BrowserRouter>
  )
}
