import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const NavBar = () => {

    return(
    <>
    <nav id="navigation">
        <a><h1><Link to="/">Nomz</Link></h1></a>
        
        <ul>
            <li><Link to="/home">Login</Link></li>
            <li>Sign Up</li>
        </ul>
    </nav>
    </>
    )
};

export default NavBar;