
import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import '../RegistrationForm/RegistrationForm.css';



function RegistrationForm(props) {
   
    return (
        <PopupWithForm name="registration_form" title="Регистрация">
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
                    <span className="form__input-name">Имя</span>
                    <input id="url-input" type="url" required placeholder="Введите своё имя"
                            className="popup__text form__input" 
                            ></input>
                    <span id="url-input-error" className="form__input-error"></span>
                    <button type="submit" className="popup__button form__submit">Зарегистрироваться</button>
                    <p className="form__link-wrapper">или<span className="form__link-text"> Войти</span></p>                   
        </PopupWithForm>
    )

}

export default RegistrationForm;