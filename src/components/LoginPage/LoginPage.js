import React, { useState }from "react";
import './styles.css';

const LoginPage = () => {

    const [loginData, setLoginData] = useState ({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;

        setLoginData({
            ...loginData,
            [name]: value
        })
    };

    const handleLoginSubmit=e => {
        e.preventDefault();
        console.log(loginData)
        fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        })
        .then(r => r.json())
        .then(data => {
            console.log(data)
        })
    }

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