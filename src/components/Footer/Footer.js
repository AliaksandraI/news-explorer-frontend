import React from 'react';
import githubIcon from '../../images/github_icon.svg';
import fbIcon from '../../images/fb_icon.svg';

import './Footer.css';

function Footer () {
    return (
        <footer className="footer">
            <p className="footer__name">&copy; 2020 Supersite, Powered by News API</p>
            <div className="footer__menu">
                <a className="footer__menu-item" href="https://praktikum.yandex.ru/">Главная</a>
                <a className="footer__menu-item" href="https://praktikum.yandex.ru/">Яндекс.Практикум</a>
                <a className="footer__menu-icon" href="https://github.com/AliaksandraI"><img src={githubIcon} alt="GitHub иконка"/></a>
                <a className="footer__menu-icon" href="https://www.facebook.com/profile.php?id=100009930902023"><img src={fbIcon} alt="GitHub иконка"/></a>
            </div>
            

        </footer>
    );
}

export default Footer;