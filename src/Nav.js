import React from 'react';
import './Nav.css';
import logo from './netflix.png';

function Nav() {
    return (
        <div className='nav'>
           <img className='nav_logo' src={logo} alt='Netflix Logo'/> 
           <img className='nav_avatar' src='' alt='Netflix Logo'/>
        </div>
    )
}

export default Nav
