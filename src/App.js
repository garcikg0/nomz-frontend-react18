import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import HomePage from "./components/HomePage/HomePage";
import KitchenPage from "./components/KitchenPage/KitchenPage";
import SearchPage from "./components/SearchPage/SearchPage";
import RecipeLibraryPage from "./components/RecipeLibraryPage/RecipeLibraryPage"

function App() {

  return(
    <> 
    <NavBar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/kitchen" element={<KitchenPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path='/recipelibrary' element={<RecipeLibraryPage />} />
    </Routes>
    </>
  )
}

export default App;
