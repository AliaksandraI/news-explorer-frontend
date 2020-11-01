import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import '../SuccesfulRegistrationForm/SuccesfulRegistrationForm.css';



function SuccesfulRegistrationForm(props) {
   
    return (
        <PopupWithForm name="login_form" title="Пользователь успешно зарегистрирован!" isOpen={props.isOpen} onClose={props.onClose}>
                <p className="form__link-text" onClick={onLoginButtonClick}>Войти</p>                   
        </PopupWithForm>
    )

    function onLoginButtonClick() {
        props.onClose();
        props.onLoginButtonClick();
    }
}

export default SuccesfulRegistrationForm;