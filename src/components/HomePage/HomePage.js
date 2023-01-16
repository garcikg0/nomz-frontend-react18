import React from 'react';
import './styles.css';

const HomePage = () => {

    return(
        <div id="layout-grid-home-page">
            <div id="kitchen-nav-container">
                <nav id="kitchen-navbar">
                    <ul>
                        <li>Kitchen Nav</li>
                    </ul>
                </nav>
            </div>
            <div id="main-home-page">
                <div id="menu-card-deck">
                    <div id="menu-card">
                        <img src="https://images.pexels.com/photos/3952043/pexels-photo-3952043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="kitchen"></img>
                    </div>
                    <div id="menu-card">
                        <img src="https://images.pexels.com/photos/4049786/pexels-photo-4049786.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="recipesearch"></img>
                    </div>
                    <div id="menu-card">
                        <img src="https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/recipe-box.jpg?itok=dkqZiJ0X"  alt="recipelibrary"></img>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomePage;