import React from 'react';
import bvideo from '../backgroundVideo.mp4'
import './styles.css'

const LandingPage = () => {

    return(
    <>
    <div id="layout-grid">
        <div id="jumbotron">
        <video autoPlay loop muted>
        <source src={bvideo} type="video/mp4"/>
        </video>
        </div>
        <div id="main">
        <h1>Nomz</h1>
        <h2>Your time-saving recipe and ingredient management tool</h2>
        <div id="content">
            <div id="content-card">
            <div id="content-card-icon">
                <img src="https://static.thenounproject.com/png/2174492-200.png" alt="kitchen-icon"></img>
            </div>
            <h3>Your Kitchen and Grocery List</h3>
            <hr></hr>
            <p>Catalog and manage ingredients in your Kitchen</p>
            <p>Ingredients that are running low are automatically added to your Grocery List</p>
            <p>Easily add ingredients from your Grocery List to Your Kitchen while you shop</p>
            </div>
            <div id="content-card">
            <div id="content-card-icon">
                <img src="https://static.thenounproject.com/png/1001683-200.png" alt="recipe-book-icon"></img>
            </div>
            <h3>Recipe Search</h3>
            <hr></hr>
            <p>Search over 2 million recipes online</p>
            <p>Visit the recipe's webpage for more details in just one click</p>
            <p>Easily add your favorite finds to your Recipe, or add your own!</p>
            </div>
            <div id="content-card">
            <div id="content-card-icon">
                <img src="https://static.thenounproject.com/png/1132473-200.png" alt="recipe-library-icon"></img>
            </div>
            <h3>Your Recipe Library</h3>
            <hr></hr>
            <p>Your favorite recipes stored in one place</p>
            <p>Spend less time seeing if you have all the ingredients needed for a recipe</p>
            <p>List view of a recipe's ingredients followed by any matches to available ingredients in Your Kitchen</p>
            </div>
        </div>
        </div>
    </div>
    </>
    )
};

export default LandingPage;