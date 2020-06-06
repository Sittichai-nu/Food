import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>
                <Link to='/'>EatSina</Link>
            </h1>
            <ul>
                <li>
                    <Link to='/menu'>Menu</Link>
                </li>
                <li>
                    <Link to='/Signup'>Register</Link>
                </li>
                <li>
                    <Link to='/Signin'>Log In</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;