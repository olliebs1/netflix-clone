import React, { useEffect, useState} from 'react';
import './Nav.css';
import logo from './netflix.png';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false)
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
           <img className='nav_logo' src={logo} alt='Netflix Logo'/> 
           <img className='nav_avatar' src='https://i.redd.it/74kqeuxol1k41.png' alt='Netflix Logo'/>
        </div>
    )
}

export default Nav
