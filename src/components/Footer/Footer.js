import React from 'react';
import githubIcon from '../../images/github_icon.svg';
import fbIcon from '../../images/fb_icon.svg';

import './Footer.css';

function Footer () {
    return (
        <footer className="footer">
            <p className="footer__name">&copy; 2020 Supersite, Powered by News API</p>
            <div className="footer__menu">
                <p className="footer__menu-item">Главная</p>
                <p className="footer__menu-item">Яндекс.Практикум</p>
                <img className="footer__menu-icon" src={githubIcon} alt="GitHub иконка"/>
                <img className="footer__menu-icon" src={fbIcon} alt="GitHub иконка"/>
            </div>
            

        </footer>
    );
}

export default Footer;