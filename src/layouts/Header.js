import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <NavLink to={'/'} className="NavLink">
                Home
            </NavLink>
            <NavLink to={'/show-books'} className="NavLink">
                ShowBooks
            </NavLink>
            <NavLink to={'/add-books'} className="NavLink">
                AddBooks
            </NavLink>
        </nav>
    );
};

export default Header;
