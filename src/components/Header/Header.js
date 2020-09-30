import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header =() => {
    return (
        <div className='navHeader'>
            <NavLink className='menuPag' to='/homepage'>Homepage</NavLink>
            <NavLink className='menuPag' to='/posts'>Posts</NavLink>
            <NavLink className='menuPag' to='/photos'>Photos</NavLink>
            <NavLink className='menuPag' to='/contacts'>Contacts</NavLink>
        </div>
    );
};

export default Header;