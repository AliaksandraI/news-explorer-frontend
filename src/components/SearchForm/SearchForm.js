import React, { Component } from 'react';

import './SearchForm.css';


const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
}
class SearchForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isEnabled: false,
          searchRequest: '',
          errors: {
            searchRequest: '',   
          }
        };
    }


  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    console.log(errors);

    switch (name) {
      case 'searchRequest': 
        errors.searchRequest = 
          value.length < 5
            ? 'Нужно ввести ключевое слово'
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

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.register(this.state.searchRequest)
    .then((res) => {
        this.onSendingRequest();
        //this.handleSuccesfulRegistration();  
      }
    )
    .catch((err) => {
        this.onSendingRequest();
      console.log('Произошла ошибка.');
    });  
  }


    render(){
        const {errors} = this.state;

        return ( 
            <div className="search__wrapper">
                
                <input type="search" className="search__input" placeholder="Введите тему новости" name="searchRequest" onChange={this.handleChange} noValidate value={this.state.searchRequest}>
                </input>
                {errors.searchRequest.length > 0 &&<span id="search-input-error" className="search__error">{errors.searchRequest}</span>}
                <button type="submit" className={this.state.isEnabled ? "search__button" : "search__button"} onClick={this.handleSubmit}>Искать</button>
            </div>
        );
    }


    onSendingRequest=() =>{
        this.setState({
            isEnabled: false,
            searchRequest: '',
            errors: {
                searchRequest: '',
              }});
    }


}


export default SearchForm;