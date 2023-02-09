import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const NavBar = ( {handleAutoLoginSubmit} ) => {

    return(
    <>
    <nav id="navigation">
        <a><h1><Link to="/">Nomz</Link></h1></a>
        
        <ul>
            <li>
                <button><Link to="/login">Login</Link></button>
            </li>
            <li>
                <button onClick={handleAutoLoginSubmit}>Auto-Login</button>
            </li>
            <li>Sign Up</li>
        </ul>
    </nav>
    </>
    )
};

export default NavBar;