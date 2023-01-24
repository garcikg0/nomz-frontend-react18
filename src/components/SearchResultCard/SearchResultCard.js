import React from "react";
import './styles.css';
import chefImage from './chefImage.png'

const SearchResultCard = ( {result}) => {

    return(
        <>
        <div id='card'>
            <h1>{result.title}</h1>
            <img src={chefImage}></img>
            <h2>{result.source}</h2>
            <div id="status">
                <i className="fas fa-check-circle">
                    <h3>Available</h3>
                </i>
            </div>
            <button id='ingred-btn'>Ingredients</button>
            <button id='instruct-btn'>Instructions and More Info</button>
            <button id='save-btn'>Save</button>
        </div>
        </>
    )
}

export default SearchResultCard;