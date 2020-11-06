import React from 'react';
import logoutPath from '../../images/logout_arrow.svg';
import menuIcon from '../../images/menu_icon.svg';
import closeMenuIcon from '../../images/menu_closeicon.svg';
import { Link } from 'react-router-dom'; 

import './Header.css';

function Header (props) {

    const [mobileMenu, openMobileMenu] = React.useState(false);

    function handleMobileMenuClick(){
        if (mobileMenu){
            openMobileMenu(false)
        } else {
            openMobileMenu(true)
        }
    }


    return (
        <header className={ mobileMenu ? "header header__mobile" : "header"}>
            <Link to="/" className={props.isHeaderForMain ? "header__name" : "header__name_dark"}>
                NewsExplorer
            </Link>
            <div className={ mobileMenu ? "header__menu-mobile" : "header__menu"}>
                <Link to="/" className={props.isHeaderForMain ? "header__text header__text_active" : "header__text_dark"}>
                    Главная
                 </Link>
                 <Link to="/saved-news" className={props.isHeaderForMain ? "header_hidden" : "header__text_dark header__dark_active"} >
                    Сохраненные статьи
                 </Link>
                 <button className={props.isHeaderForMain ? "header__button" : "header_hidden"} onClick={props.onAuthButtonClick}>
                    <p className="header__button-text">Авторизоваться</p> 
                </button>
                <button className={props.isHeaderForMain ? "header_hidden" : "header__button_dark"}>
                    <Link to="/" className="header__button-text header__button-text_dark">
                        Грета 
                     </Link>
                    <img src={logoutPath} className="header__logo" alt="кнопка вылогиниться"/>
                </button>
            </div>
            <button className="header__menu-button" type="button" onClick={handleMobileMenuClick}>
                <img src={mobileMenu ? closeMenuIcon : menuIcon} alt="кнопка меню"></img>
            </button>
        </header>
    );
}


export default Header;
