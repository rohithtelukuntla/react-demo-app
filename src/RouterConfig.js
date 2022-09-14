import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
//import UsersInfo from "./APICommunication/UsersInfo";

import PageNotFound from "./routing/PageNotFound";
//import UserDetails from "./APICRUD2/UserDetails";
//import EditUser from "./APICRUD2/EditUser";
//import AddUser from "./APICRUD2/AddUser";
//import Parent from "./ContextAPIwithhook/Parent";
//import UseStateHook from "./HooksAPI/UseStateHook";
//import UseReducerHook from "./HooksAPI/UseReducerHook2";
import Main from "./propTypes/Main";
export default function RouterConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        {/*<Route path="/edit/:uid" element={<EditUser />} />
        <Route path="/add" element={<AddUser />} />*/}
  <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
