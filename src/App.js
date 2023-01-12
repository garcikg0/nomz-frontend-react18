import { useState } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom"
import bvideo from "./components/backgroundVideo.mp4"
import './App.css';

function App() {

  return( 
  <>
  <nav id="navigation">
    <h1>Nomz</h1>
    <ul>
      <li>Login</li>
      <li>Sign Up</li>
    </ul>
  </nav>
  <div className="video">
    <video autoPlay loop muted>
      <source src={bvideo} type="video/mp4"/>
    </video>
  </div>

  <h1>Nomz</h1>
  <h2>Your time-saving recipe and ingredient management tool</h2>
  </>
  
  )
}

export default App;
