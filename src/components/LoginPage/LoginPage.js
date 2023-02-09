import React from "react";
import './styles.css';

const LoginPage = ({ loginData, setLoginData, handleLoginSubmit}) => {

    const handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;

        setLoginData({
            ...loginData,
            [name]: value
        })
    };

    return(
    <>
        <div className="formBox">
            <form className="login-form" onSubmit={handleLoginSubmit}>
                <h2>Log In</h2>
                <input className="login-input" type="text" name="email" placeholder="Email" onChange={handleChange}></input>
                <input className="login-input" type="password" name="password" placeholder="Password" onChange={handleChange}></input>
                <input className="login-button" type="submit" value="Login"></input>
            </form>
        </div>
        <button className="login-button">Close</button>
    </>
    )
};

export default LoginPage;