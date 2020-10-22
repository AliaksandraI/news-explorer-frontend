import React from 'react';
import logoutPath from '../../images/logout_arrow.svg';


function Header () {
    return (
        <header className="header">
            <a href="#" className="header__name" >NewsExplorer</p>
            <div>
                <a href="#">Главная</p>
                <a href="#">Сохраненные статьи</p>
                <a href="#">Авторизоваться</p>
                <div>
                    <a href="#">Грета</a> 
                    <img src={logoutPath} className="header__logo" alt="кнопка вылогиниться"/>
                </div>
            </div>
        </header>
    );
}

export default Header;