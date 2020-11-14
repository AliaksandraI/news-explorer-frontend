import React from 'react';
import Header from '../Header/Header.js';
import Search from '../Search/Search.js';
import NewsCardList from '../NewsCardList/NewsCardList.js'; 
import About from '../About/About.js';
import Preloader from '../Preloader/Preloader.js';
import RegistrationForm from '../RegistrationForm/RegistrationForm.js';
import LoginForm from '../LoginForm/LoginForm.js';
import SuccesfulRegistrationForm from '../SuccesfulRegistrationForm/SuccesfulRegistrationForm.js';
import Footer from '../Footer/Footer.js';


import './Main.css';
import '../NewsCardList/NewsCardList.css';


class Main extends React.Component{
   

    constructor(props){
        super();
        this.state = {
            isLoginFormOpen: false,
            isRegistrationFormOpen: false,
            isSuccesfulRegistrationFormOpen: false
        }
    }

    render () {
        return (
            <div >
                <div className="main__header-image">
                    <Header loggedIn={this.props.loggedIn} isHeaderForMain={true} onAuthButtonClick={this.handleLoginClick} handleLogOut={this.props.handleLogOut}/>
                    <Search sucessfulSearchRequest={this.props.sucessfulSearchRequest} sendNewsRequest={this.props.sendNewsRequest}/>
                </div>
                <section className={!this.props.isNothingFound ? "cards" : "cards main__section-hidden"} >
                    <h2 className="cards__title">Результаты поиска</h2>
                    <NewsCardList articles={this.props.articles.slice(0, this.state.visibleCount)} loggedIn={this.props.loggedIn} handleArticleSaving={this.props.handleArticleSaving} isSavedNews={false}/>
                    <div className={ this.props.areThereMoreArticles ? "cards__button-wrapper" : "cards__button-wrapper main__section-hidden" }>
                        <button onClick={this.props.onArticleListClick} className="cards__button">Показать еще</button>
                    </div>
                </section>
                <Preloader visibility={this.props.preloaderSectionVisible  ? " " : "main__section-hidden"} isPreloading={this.props.isPreloading} isNothingFound={this.props.isNothingFound}/>
                <About />
                <LoginForm handleLogin={this.props.handleLogin} authorize={this.props.authorize} isOpen={this.state.isLoginFormOpen} onClose={this.closeAllPopups} onRegistrationButtonClick={this.handleRegistrationClick}>
                </LoginForm >
                <RegistrationForm register={this.props.register} isOpen={this.state.isRegistrationFormOpen} onClose={this.closeAllPopups} onLoginButtonClick={this.handleLoginClick} onSuccesfulRegistration={this.handleSuccesfulRegistration} >
                </RegistrationForm>
                <SuccesfulRegistrationForm  isOpen={this.state.isSuccesfulRegistrationFormOpen} onClose={this.closeAllPopups} onLoginButtonClick={this.handleLoginClick}>
                </SuccesfulRegistrationForm>
                <Footer />
        </div>
        );
    }


    handleLoginClick = () => {
        this.setState({ isLoginFormOpen: true });
    }

    handleRegistrationClick = () => {
        this.setState({ isRegistrationFormOpen: true });
    }

    handleSuccesfulRegistration = () => {
        this.setState({ isSuccesfulRegistrationFormOpen: true });
    }

    closeAllPopups = () => {
        this.setState({
            isLoginFormOpen: false,
            isRegistrationFormOpen: false,
            isSuccesfulRegistrationFormOpen: false,
        });
    }


}


export default Main;


