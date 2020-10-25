import React from 'react';
import logoutPath from '../../images/logout_arrow.svg';

import './Header.css';

function Header () {
    return (
        <header className="header">
            <p className="header__name header__text_dark" >NewsExplorer</p>
            <div className="header__menu">
                <a className="header__text header__text_dark " href="https://www.segerios.com/wp-content/uploads/2016/09/Brilliant-Brown-And-White-Beagle-Dog-Looking-At-You.jpg">Главная</a>
                <a className="header__text header__text_dark " href="https://www.segerios.com/wp-content/uploads/2016/09/Brilliant-Brown-And-White-Beagle-Dog-Looking-At-You.jpg">Сохраненные статьи</a>
                <button className="header__button_dark" >
                    <a className="header__text header__text_dark " href="https://www.segerios.com/wp-content/uploads/2016/09/Brilliant-Brown-And-White-Beagle-Dog-Looking-At-You.jpg">Грета </a> 
                    <img src={logoutPath} className="header__logo" alt="кнопка вылогиниться"/>
                </button>
            </div>
        </header>
    );
}

export default Header;