import React from 'react';
import './styles.css';
import ingredIcon from './ingredIcon.png'

const IngredientCard = ( {result} ) => {

    return(
    <>
        <div className='ingredient-card'>
            <img src={ingredIcon} alt="None"/>
            <div className='ingredient-card-body'>
                <h1>{result.name}</h1>
                <p>Status: {result.status}</p>
                <p>Stored in the {result.storage}</p>
                <button className="edit-button">Edit</button>
                <button className="low-button">Running Low</button>
                <button className="remove-button">Remove</button>
            </div>
        </div>
    </>
    )
}

export default IngredientCard;