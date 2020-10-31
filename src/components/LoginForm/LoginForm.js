import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import '../LoginForm/LoginForm.css';



function LoginForm(props) {
   
    return (
        <PopupWithForm name="login_form" title="Вход" isOpen={props.isOpen} onClose={props.onClose}>
                    <span className="form__input-name">Email</span>
                    <input id="url-input" type="url" required placeholder="Введите почту"
                            className="popup__text form__input" 
                            ></input>
                    <span id="url-input-error" className="form__input-error"></span>
                    <span className="form__input-name">Пароль</span>
                    <input id="url-input" type="url" required placeholder="Введите пароль"
                            className="popup__text form__input" 
                            ></input>
                    <span id="url-input-error" className="form__input-error"></span>
                    <button type="submit" className="popup__button form__submit">Войти</button>
                    <p className="form__link-wrapper">или<span className="form__link-text"> Зарегистрироваться</span></p>                   
        </PopupWithForm>
    )

}

export default LoginForm;