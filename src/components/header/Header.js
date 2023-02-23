import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderStyle.css';

const Header = ({ isLoggedIn, onLogout }) => {
    const handleLogout = () => {
        if (onLogout) {
            onLogout();
        }
    };

    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                {isLoggedIn ? (
                    <Link to="/logout" onClick={handleLogout}>Logout</Link>
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