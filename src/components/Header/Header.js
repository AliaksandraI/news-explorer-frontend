import React from 'react';
import logoutPathLight from '../../images/logout_arrow.svg';
import logoutPathDark from '../../images/logout_arrow_dark.svg';
import menuIconDark from '../../images/menu_icon.svg';
import menuIconLight from '../../images/menu_icon-light.svg';
import closeMenuIcon from '../../images/menu_closeicon.svg';
import { Link } from 'react-router-dom'; 


import './Header.css';

function Header (props) {

  

    const [mobileMenu, openMobileMenu] = React.useState(false);

    function handleMobileMenuClick(){
        if (mobileMenu){
            openMobileMenu(false)
        } else {
            openMobileMenu(true);
            
        }
    }


    return (
        <header className={ mobileMenu ? "header header__mobile" : "header"}>
            <Link to="/" className={props.isHeaderForMain ? "header__name" : `${mobileMenu  ? 'header__name' : 'header__name_dark'}`}>
                NewsExplorer
            </Link>
            <div className={ mobileMenu ? "header__menu-mobile" : "header__menu"}>
                <Link to="/" className={props.isHeaderForMain ? "header__text header__text_active" : "header__text_dark"}>
                    Главная
                 </Link>
                 <Link to="/saved-news" className={props.isHeaderForMain ? `${props.loggedIn  ? 'header__text' : 'header_hidden'}` : "header__text_dark header__dark_active"} >
                    Сохраненные статьи
                 </Link>

                <button className={props.isHeaderForMain ? `${props.loggedIn  ? 'header_hidden' : 'header__button'}`: "header_hidden"} onClick={props.onAuthButtonClick}>
                    <p className="header__button-text">Авторизоваться</p> 
                </button>

                <button className={props.isHeaderForMain ? `${props.loggedIn  ? 'header__button' : 'header_hidden'}` : "header__button_dark"} onClick={props.handleLogOut}>
                    <Link to="/" className={props.isHeaderForMain ? `${props.loggedIn  ? 'header__text' : ''}` : "header__button-text header__button-text_dark"}>
                    {props.loggedIn  ? props.currentUser.name : 'Greta'}
                     </Link>
                    <img src={ props.isHeaderForMain  ? logoutPathDark : logoutPathLight} className="header__logo" alt="кнопка вылогиниться"/>
                </button>

            </div>
            <button className="header__menu-button" type="button" onClick={handleMobileMenuClick}>
                <img src={mobileMenu ? closeMenuIcon : `${ props.isHeaderForMain  ? menuIconDark : menuIconLight}`} alt="кнопка меню"></img>
            </button>
        </header>
    );

}


export default Header;
