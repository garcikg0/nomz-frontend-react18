import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import HomePage from "./components/HomePage/HomePage";
import KitchenPage from "./components/KitchenPage/KitchenPage";
import SearchPage from "./components/SearchPage/SearchPage";
import RecipeLibraryPage from "./components/RecipeLibraryPage/RecipeLibraryPage"

function App() {

  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return(
    <> 
    <NavBar
      setIsLoginOpen={setIsLoginOpen} 
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
    </Routes>
    </>
  )
}

export default App;
