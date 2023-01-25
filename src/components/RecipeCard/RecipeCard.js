import React, { useState } from "react";
import './styles.css';
import chefImage from '../SearchResultCard/chefImage.png'

const RecipeCard = ( {result}) => {

    const [showIngred, setShowIngred] = useState(false);
    const activeStatus = showIngred ? '-active' : '';

    const handleIngredClick = e => {
        e.preventDefault();
        setShowIngred(!showIngred)
    }

    return(
        <>
        <div id='card'>
            <h1>{result.title}</h1>
            <img src={chefImage} alt='foo'></img>
            <h2>{result.source}</h2>
            <div id="status">
                <i className="fas fa-check-circle">
                    <h3>Available</h3>
                </i>
            </div>
            <button id='ingred-btn' onClick={handleIngredClick}>Ingredients</button>
            <button id='instruct-btn'>Instructions and More Info</button>
            <button id='delete-btn'>Delete</button>
        </div>
        <div id={`ingred-content${activeStatus}`}>
            <div className="recipe-ingred-title">
                <h1>Recipe Ingredient</h1>
            </div>
            <div className="kitchen-ingred-title">
                <h1>Kitchen Ingredient</h1>
            </div>
            <div className="ingred-actions-title">
                <h1>Actions</h1>
            </div>
            <div className="recipe-ingred">
                <p>Ingred</p>
            </div>
            <div className="kitchen-ingred">
                <p>Match Confirmed</p>
            </div>
            <div className="ingred-actions">
                <p>Actions</p>
            </div>
            <div className="recipe-ingred">
                <p>Ingred</p>
            </div>
            <div className="kitchen-ingred">
                <p>No Match</p>
            </div>
            <div className="ingred-actions">
                <p>Actions</p>
            </div>
            <div className="recipe-ingred">
                <p>Ingred</p>
            </div>
            <div className="kitchen-ingred">
                <p>Match 1</p>
                <p>Match 2</p>
                <p>Match 3</p>
            </div>
            <div className="ingred-actions">
                <p>Actions</p>
                <p>Actions</p>
                <p>Actions</p>
            </div>
        </div>
        </>
    )
}

export default RecipeCard;