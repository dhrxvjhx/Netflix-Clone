import React, { useEffect, useState } from 'react';
import './Nav.css'

function Nav() {
    const[show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 200) {
                handleShow(true);
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll")
        };
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
            className="nav_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="netflix-logo"/>
            <a href="https://github.com/dhrxvjhx">
            <img
            className="nav_avatar"
            src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
            alt="netflix-profile"/></a>
        </div>
    )
}

export default Nav
