import React from "react";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="App">
        <h1>login</h1>
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
            <button type="submit">Login</button>
        </form>
        <Link to="/register"> not a member? Register</Link>
        </div>
    );
};

    export default Login;
