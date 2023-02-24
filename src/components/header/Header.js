import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderStyle.css';

const Header = ({ isLoggedIn, onLogout }) => {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                {isLoggedIn ? (
                    <Link to="/logout" onClick={onLogout}>Logout</Link>
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