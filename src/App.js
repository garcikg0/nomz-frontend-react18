import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import HomePage from "./components/HomePage/HomePage";
import KitchenPage from "./components/KitchenPage/KitchenPage";
import SearchPage from "./components/SearchPage/SearchPage";
import RecipeLibraryPage from "./components/RecipeLibraryPage/RecipeLibraryPage"
import LoginPage from "./components/LoginPage/LoginPage";

function App() {

  const [isLoginOpen, setIsLoginOpen] = useState(false);
   const [loginData, setLoginData] = useState ({
        email: "",
        password: ""
    })

  const handleLoginSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
    })
    .then(r => r.json())
    .then(data => {
        console.log(data)
        const { user, token } = data
        localStorage.token = token
    })
  }

  const handleAutoLoginSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:3000/autologin", {
      method: "GET",
      headers: {
        "Authorization" : `Bearer ${localStorage.token}`
      }
    })
    .then(r => r.json())
    .then(data => {
      console.log(data)
    })
  }

  return(
    <> 
    <NavBar
      handleAutoLoginSubmit={handleAutoLoginSubmit}
    />
    <Routes>
      <Route path="/" element={
        <LandingPage 
          isLoginOpen={isLoginOpen}
          setIsLoginOpen={setIsLoginOpen}
        />} 
      />
      <Route path="/home" element={<HomePage />} />
      <Route path="/kitchen" element={<KitchenPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path='/recipelibrary' element={<RecipeLibraryPage />} />
      <Route path='/login' element={
        <LoginPage
          loginData={loginData}
          setLoginData={setLoginData}
          handleLoginSubmit={handleLoginSubmit}
        />} />
    </Routes>
    </>
  )
}

export default App;
