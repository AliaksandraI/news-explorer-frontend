
import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import '../RegistrationForm/RegistrationForm.css';



function RegistrationForm(props) {
   
    return (
        <PopupWithForm name="registration_form" title="Регистрация" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSuccesfulRegistration}>
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
                    <span className="form__input-name">Имя</span>
                    <input id="text-input" type="text" required placeholder="Введите своё имя"
                            className="popup__text form__input" 
                            ></input>
                    <span id="url-input-error" className="form__input-error"></span>
                    <button type="submit" className="popup__button form__submit" onClick={handleSuccesfulRegistration}>Зарегистрироваться</button>
                    <p className="form__link-wrapper">или<span className="form__link-text" onClick={onLoginButtonClick}> Войти</span></p>                   
        </PopupWithForm>
    )

    function onLoginButtonClick() {
        props.onClose();
        props.onLoginButtonClick();
    }

    function handleSuccesfulRegistration(event) {
        event.preventDefault();
        props.onClose();
        props.onSuccesfulRegistration();
    }
}

export default RegistrationForm;