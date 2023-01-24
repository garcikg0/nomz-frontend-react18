import React from "react";
import './styles.css';
import RecipeCard from "../RecipeCard/RecipeCard";

const RecipeLibrary = () => {

    let arr = [];

    let fakeArr = () => {
        for (let i = 0; i < 20; i++) {
            let obj = {
                title: "Saved Recipe Title",
                source: "source"
            }
            arr.push(obj)
        }
    }

    fakeArr();

    let renderRecipeCards = arr.map((result, i) => {
        return(
            <RecipeCard 
            key={i} 
            result={result}
            />
        )
    })

    return(
        <>
        <div id="layout-grid-recipe-library">
            <div id="kitchen-nav-container">
                <nav id="kitchen-navbar">
                    <ul>
                        <li>Kitchen Nav</li>
                    </ul>
                </nav>
            </div>
            <div id="searchbar-container">
                <form id="search-bar-form" >
                    <input id="search-bar-input"
                    type="search"
                    placeholder="Search..."
                    autoFocus required
                    />
                    <button id="search-bar-button">Go</button>
                </form>
            </div>
            <div id="main-recipe-library">
                <div id="recipe-library-container">
                    {renderRecipeCards}
                </div>
            </div>
        </div>
        </>
    )
};

export default RecipeLibrary;