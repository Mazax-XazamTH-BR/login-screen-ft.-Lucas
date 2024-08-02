import React from "react";
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <a href="">About</a>
            <a href="">Download</a> 
            <a href="">??</a>
            <a href="">Features</a>
            <a href="">Contact</a>
            <a href="" className="signIn__button">Sign In</a>
        </div>
    )
}

export default Header;