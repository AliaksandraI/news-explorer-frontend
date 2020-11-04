import React from 'react';
import EscapeOutside from 'react-escape-outside';
import closeButtonPath from '../../images/close_button.svg';
import '../PopupWithForm/PopupWithForm.css';

class PopupWithForm extends React.Component {

    constructor(props) {
        super(props);

        this.handleEscapeOutside = this.handleEscapeOutside.bind(this);
    }
  
    handleEscapeOutside = (e) =>{
        //e.stopPropagation(); 
        this.props.onClose();
    }

    render () {
        return (
           //<EscapeOutside onEscapeOutside={ this.handleEscapeOutside }>
            <section className={`popup ${this.props.isOpen ? "popup_opened" : ""}`}>
                    <form className="popup__container form" onSubmit={this.props.onSubmit}>
                        <h2 className="popup__title">{this.props.title}</h2>
                        {this.props.children}
                        <button aria-label="close" type="button" className="popup__close-button" onClick={this.props.onClose}>
                            <img src={closeButtonPath} alt="Кнопка закрыть" className="popup__close-button-image"></img>
                        </button>
                    </form>
            </section>
           //</EscapeOutside>
        );
    }

}    



export default PopupWithForm;