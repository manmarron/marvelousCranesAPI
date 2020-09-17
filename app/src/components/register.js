import React from "react";
import {Link} from "react-router-dom";

const Register = () =>{
    return (
        <div className="App">
        <h1>Register</h1>
        <form action="submit">
        <input
            type="text"
            placeholder="Username..."
            required
            name="username"
        />
        <input
            type="password"
            placeholder="Password..."
            required
            name="password"
            />
        <input
            type="password"
            placeholder="Confirm Password..."
            required
            name="confirmPassword"
            />
            <button type="submit">Register</button>
        </form>
        <Link to="/"> already a member? Login</Link>
        </div>
    )};

    export default Register;