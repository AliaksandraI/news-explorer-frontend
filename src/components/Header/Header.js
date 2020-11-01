import React from 'react';
import logoutPath from '../../images/logout_arrow.svg';
import { Link } from 'react-router-dom'; 

import './Header.css';

function Header (props) {
    return (
        <header className="header">
            <Link to="/" exact className={`header__name ${props.isHeaderForMain ? "header__text" : "header__text_dark"}`}>
                NewsExplorer
            </Link>
            <div className="header__menu">
                <Link to="/" exact className={props.isHeaderForMain ? "header__text" : "header__text_dark"}>
                    Главная
                 </Link>
                 <Link to="/saved-news" exact className={props.isHeaderForMain ? "header_hidden" : "header__text_dark"} >
                    Сохраненные статьи
                 </Link>
                 <button className={props.isHeaderForMain ? "header__button" : "header_hidden"} onClick={props.onAuthButtonClick}>
                    <p className="header__button-text">Авторизоваться</p> 
                </button>
                <button className={props.isHeaderForMain ? "header_hidden" : "header__button_dark"}>
                    <a className="header__text header__text_dark " href="https://www.segerios">Грета </a> 
                    <img src={logoutPath} className="header__logo" alt="кнопка вылогиниться"/>
                </button>
            </div>
        </header>
    );
}

export default Header;
