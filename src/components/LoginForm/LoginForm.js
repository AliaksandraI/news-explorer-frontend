import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import '../LoginForm/LoginForm.css';



function LoginForm(props) {
   
    return (
        <PopupWithForm name="avatar" title="Вход" buttonName="Войти">
                    <input id="url-input" type="url" required placeholder="Введите почту"
                            className="popup__text form__input" 
                            ></input>
                    <span id="url-input-error" className="form__input-error"></span>
        </PopupWithForm>
    )

}

export default LoginForm;