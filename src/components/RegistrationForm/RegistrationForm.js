
import React, { Component } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import '../RegistrationForm/RegistrationForm.css';


const validEmailRegex = RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class RegistrationForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEnabled: false,
            email: '',
            password: '',
            userName: '',
            errors: {
              userName: '',
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
      case 'userName': 
        errors.userName = 
          value.length < 5
            ? 'Неправильный формат имени'
            : '';
        break;
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

    this.enableCheck();
  }

  enableCheck = () =>{
    if(validateForm(this.state.errors)) {
        this.setState({
            isEnabled: true,})
    }else{
        this.setState({
            isEnabled: false,})
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.register(this.state.userName, this.state.email, this.state.password)
    .then((res) => {
        this.handleSuccesfulRegistration();  
      }
    )
    .catch((err) => {
      console.log('Произошла ошибка.');
    });  
  }
    render(){
    const {errors} = this.state;
    return (
        <PopupWithForm name="registration_form" title="Регистрация" isOpen={this.props.isOpen} onClose={this.onClose} onSubmit={this.handleSubmit} noValidate>
                    <span className="form__input-name">Email</span>
                    <input id="email-input-registration" type="email" autoComplete="useremail" required placeholder="Введите почту"
                            className="popup__text form__input" 
                            name='email' onChange={this.handleChange} noValidate value={this.state.email}></input>
                    {errors.email.length > 0 &&<span className="form__error">{errors.email}</span>}

                    <span className="form__input-name">Пароль</span>
                    <input id="password-input-registration" type="password" autoComplete="current-password" required placeholder="Введите пароль"
                            className="popup__text form__input" name='password' onChange={this.handleChange} noValidate  value={this.state.password}
                            ></input>
                    {errors.password.length > 0 &&<span id="url-input-error" className="form__error">{errors.password}</span>}

                    <span className="form__input-name">Имя</span>
                    <input id="text-input-registration" type="text" required placeholder="Введите своё имя"
                            className="popup__text form__input" name='userName' onChange={this.handleChange} noValidate value={this.state.userName}
                            ></input>
                    {errors.userName.length > 0 &&<span id="url-input-error" className="form__error form__error-user">{errors.userName}</span>}

                    <button type="submit" className={this.state.isEnabled ? "popup__button_active" : "popup__button"} onClick={this.handleSubmit}>Зарегистрироваться</button>
                    <p className="form__link-wrapper">или<span className="form__link-text" onClick={this.onLoginButtonClick}> Войти</span></p>                   
        </PopupWithForm>
    )}



    onClose=() =>{
        this.props.onClose();
        this.setState({
            isEnabled: false,
            userName: '',
            email: '',
            password: '',
            errors: {
                userName: '',
                email: '',
                password: '',
              }});
    }

    onLoginButtonClick =() => {
        this.props.onClose();
        this.props.onLoginButtonClick();
    }


    handleSuccesfulRegistration=(event)=> {
      this.props.onClose();
      this.props.onSuccesfulRegistration();
    }
}

export default RegistrationForm;