import React from "react";
import './styles.css';

const LoginPage = () => {

    const handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;
    };
    
    return(
    <>
        <div className="modal">
            <div className="formBox">
                <form className="signup-form" >
                    <h2>Create an Account</h2>
                    <input className="signup-input" type="text" name="first_name" placeholder="First Name" onChange={handleChange}></input>
                    <input className="signup-input" type="text" name="last_name" placeholder="Last Name" onChange={handleChange}></input>
                    <input className="signup-input" type="email" name="email" placeholder="Email Address" onChange={handleChange}></input>
                    <input className="signup-input" type="text" name="username" placeholder="Username" onChange={handleChange}></input>
                    <input className="signup-input" type="password" name="password" placeholder="Password" onChange={handleChange}></input>
                    <input className="signup-input" type="password_confirmation" name="password confirmation" placeholder="Password Confirmation" onChange={handleChange}></input>
                    <input className="signup-button" type="submit" value="Sign Up"></input>
                </form>
            </div>
            <button className="signup-button">Close</button>
        </div>
    </>
    )
};

export default LoginPage;