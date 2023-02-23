import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderStyle.css';

const Header = ({ isLoggedIn }) => {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                {isLoggedIn ? (
                    <Link to="/logout">Logout</Link>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </nav>
        </header>
    );
}

export default Header;