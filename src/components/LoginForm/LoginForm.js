import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import '../LoginForm/LoginForm.css';



function LoginForm(props) {
   
    return (
        <PopupWithForm name="login_form" title="Вход" isOpen={props.isOpen} onClose={props.onClose} >
                    <span className="form__input-name">Email</span>
                    <input id="email-input" type="email" required placeholder="Введите почту"
                            className="popup__text form__input" 
                            ></input>
                    <span id="url-input-error" className="form__input-error"></span>
                    <span className="form__input-name">Пароль</span>
                    <input id="password-input" type="password" required placeholder="Введите пароль"
                            className="popup__text form__input" 
                            ></input>
                    <span id="url-input-error" className="form__input-error"></span>
                    <button type="submit" className="popup__button form__submit">Войти</button>
                    <p className="form__link-wrapper">или<span className="form__link-text" onClick={onRegistrationButtonClick}> Зарегистрироваться</span></p>                   
        </PopupWithForm>
    )

    function onRegistrationButtonClick () {
        props.onClose();
        props.onRegistrationButtonClick();
    }

}

export default LoginForm;