import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../../img/logo.png';

const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="container">
                    <div className="navbar__inner">
                        <Link className="navbar__logo--box" to="/">
                            <img className="navbar__img" src={Logo} alt="Sportious" />
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;