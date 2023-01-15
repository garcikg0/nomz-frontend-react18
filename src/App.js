import React, { useState } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import bvideo from "./components/backgroundVideo.mp4"
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import HomePage from "./components/HomePage/HomePage";

function App() {

  return(
    <> 
    <NavBar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
    </>
  )
}

export default App;
