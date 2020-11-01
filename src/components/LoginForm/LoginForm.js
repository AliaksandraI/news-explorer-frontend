import React, { Component }  from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import '../LoginForm/LoginForm.css';


const validEmailRegex = RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class LoginForm extends Component  {
   
    constructor(props) {
        super(props);
        this.state = {
          isEnabled: false,
          email: '',
          password: '',
          errors: {
            email: '',
            password: '',
          }
        };
    }


  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Неправильный формат email';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Слишком короткий пароль'
            : '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});

    this.EnableCheck();
    
  }

  EnableCheck = () =>{
    if(validateForm(this.state.errors)) {
        this.setState({
            isEnabled: true,})
    }else{
        this.setState({
            isEnabled: false,})
    }
    }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }


    render(){
        const {errors} = this.state;
        return (
            <PopupWithForm name="login_form" title="Вход" isOpen={this.props.isOpen} onClose={this.props.onClose} >
                        <span className="form__input-name">Email</span>
                        <input id="email-input" type="email" required placeholder="Введите почту"
                                className="popup__text form__input" 
                                name='email' onChange={this.handleChange} noValidate ></input>
                        {errors.email.length > 0 &&<span className="form__error">{errors.email}</span>}

                        <span className="form__input-name">Пароль</span>
                        <input id="password-input" type="password" required placeholder="Введите пароль"
                                className="popup__text form__input" name='password' onChange={this.handleChange} noValidate
                                ></input>
                        {errors.password.length > 0 &&<span id="url-input-error" className="form__error">{errors.password}</span>}

                        <button type="submit" className={this.state.isEnabled ? "popup__button_active" : "popup__button"}>Войти</button>
                        <p className="form__link-wrapper">или<span className="form__link-text" onClick={this.onRegistrationButtonClick}> Зарегистрироваться</span></p>                   
            </PopupWithForm>
        )}

    
        onClose=() =>{
            this.props.onClose();
            this.setState({
                isEnabled: false,
                email: null,
                password: null,
                errors: {
                    userName: '',
                    email: '',
                    password: '',
                  }});
        }

    onRegistrationButtonClick = () => {
        this.props.onClose();
        this.props.onRegistrationButtonClick();
    }

}

export default LoginForm;