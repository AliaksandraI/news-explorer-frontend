import React from 'react';
import closeButtonPath from '../../images/close_button.svg';
import '../PopupWithForm/PopupWithForm.css';

class PopupWithForm extends React.Component {

    constructor(props) {
        super(props);
    }
  
    render () {

        return (

            <section className="popup popup_opened ">
                    <form className="popup__container form">
                        <h2 className="popup__title">{this.props.title}</h2>
                        {this.props.children}
                        <button type="submit" className="popup__button form__submit">{this.props.buttonName}</button>
                        <button aria-label="close" type="button" className="popup__close-button">
                            <img src={closeButtonPath} alt="Кнопка закрыть" className="popup__close-button-image"></img>
                        </button>
                    </form>
            </section>

        );
    }
}    



export default PopupWithForm;