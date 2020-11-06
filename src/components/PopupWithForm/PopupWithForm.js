import React from 'react';
import closeButtonPath from '../../images/close_button.svg';
import '../PopupWithForm/PopupWithForm.css';

class PopupWithForm extends React.Component {

    constructor(props) {
        super(props);

        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }


    componentDidMount() {
        window.addEventListener('keyup', this.handleKeyUp, false);
        document.addEventListener('click', this.handleOutsideClick, false);
    }
    
     
    componentWillUnmount() {
        window.removeEventListener('keyup', this.handleKeyUp, false);
        document.removeEventListener('click', this.handleOutsideClick, false);
    }

    handleKeyUp(e) {
        const keys = {
          27: () => {
            e.preventDefault();
            this.props.onClose();
          },
        };
    
        if (keys[e.keyCode]) { keys[e.keyCode](); }
      }
      
    
    handleOutsideClick(e) {
        if (this.props.isOpen && e.target.id==='section'){
            this.props.onClose();
        }
    } 

    render () {
        return (
            <section id='section' className={`popup ${this.props.isOpen ? "popup_opened" : ""}`}>
                    <form className="popup__container form" onSubmit={this.props.onSubmit}>
                        <h2 className="popup__title">{this.props.title}</h2>
                        {this.props.children}
                        <button aria-label="close" type="button" className="popup__close-button" onClick={this.props.onClose}>
                            <img src={closeButtonPath} alt="Кнопка закрыть" className="popup__close-button-image"></img>
                        </button>
                    </form>                  
            </section>
           
        );
    }

}    



export default PopupWithForm;