import React from "react";
import './styles.css';
import IngredientCard from "../IngredientCard/IngredientCard";

const KitchenPage = () => {

    let arr = [];

    let fakeArr = () => {
        for (let i = 0; i < 20; i++) {
            let obj = {
                // icon: 'Icon',
                name: "Name of Ingred",
                status: "Status",
                storage: "Storage",
            }
            arr.push(obj)
        }
    }

    fakeArr();

    let renderIngredCards = arr.map((result, i) => {
        return(
            <IngredientCard 
            key={i} 
            result={result}
            />
        )
    })

    return(
    <>
        <div id='layout-grid-kitchen-page'>
            <div id='kitchen-nav-container'>
                <nav id='kitchen-navbar'>
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
            <div id="main-kitchen-page">
                <div id="kitchen-page-container">
                    <div id="kitchen-page-card-deck">
                        {renderIngredCards}
                    </div>
                </div>
                <div className="add-ingredient">Add Ingredient</div>
            </div>
        </div>   
    </>
    )
};

export default KitchenPage;