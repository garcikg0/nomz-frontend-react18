import React from "react";
import './styles.css';
import SearchResultCard from "../SearchResultCard/SearchResultCard";

const SearchPage = () => {

    return(
        <>
        <div id="layout-grid-search-page">
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
            <div id="main-search-page">
                <div id="search-result-container">
                    <SearchResultCard />
                </div>
            </div>
        </div>
      
        </>
        
    )
};

export default SearchPage;