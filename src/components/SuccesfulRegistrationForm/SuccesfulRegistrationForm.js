import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import '../SuccesfulRegistrationForm/SuccesfulRegistrationForm.css';



function SuccesfulRegistrationForm(props) {
   
    return (
        <PopupWithForm name="login_form" title="Пользователь успешно зарегистрирован!">
                <p className="form__link-text">Войти</p>                   
        </PopupWithForm>
    )

}

export default SuccesfulRegistrationForm;