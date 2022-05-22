import React from "react";
import Header from "../components/header/Header"
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AddCard from "../components/cards/AddCard";
import Footer from "../components/Footer";
const Routing = () => {
  // function refreshPage() {
  //   window.location.reload(false);
  // }

  return (
    <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/addCard" element={<AddCard/>} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
};

export default Routing;
