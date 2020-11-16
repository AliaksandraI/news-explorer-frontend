import React, { Component } from 'react';
//import cardImage from '../../images/image_05.jpg';
import notFoundImagePath from '../../images/not_found.svg';
import saveArticle from '../../images/tosave_button.svg';
import saveArticleHover from '../../images/tosave_button_hover.svg';
import saveArticleMarked from '../../images/tosave_button_marked.svg';
import deleteArticle from '../../images/delete_button.svg';
import deleteArticleHover from '../../images/delete_button_hover.svg';
import './NewsCard.css';


class NewsCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notLogedMessageShown: false,
            articleIsSaved: false,
            cardMessagePoppingUp: '',
            savedArticle: null
        }
    };

    componentDidMount() {
        if (!this.props.isSavedNews) {
            let articles = localStorage.getItem('saved_articles');

            if(articles){
                articles = JSON.parse(articles);
            }

            let isSaved = false;
            let savedArticle = null;
            if (articles && articles.length > 0) {
                for(let i = 0; i < articles.length; i++) {
                    if (articles[i].link === this.props.article.url &&
                        articles[i].image === this.props.article.urlToImage) {
                            isSaved = true;  
                            savedArticle = articles[i];           
                            break;
                        }
                }
            }

            this.setState({
                articleIsSaved: isSaved,
                savedArticle: savedArticle
            });
        }
    }

    handleButtonFocus =() => {
        if(this.props.isSavedNews) {
            this.setState({
                cardMessagePoppingUp: 'Убрать из сохранённых',
                notLogedMessageShown: true,
            })
        } else if (!this.props.loggedIn) {
            this.setState({
                cardMessagePoppingUp: 'Войдите, чтобы сохранять статьи',
                notLogedMessageShown: true,
            })
        }
    }

    handleButtonUnfocus = () =>{
        this.setState({
            notLogedMessageShown: false,
        })
    }

    handleSaveArticleClick = () => {
        if(this.props.loggedIn){
            this.props.handleArticleSaving(this.props.article);
            this.setState({
                articleIsSaved: true,
            })
        } else {
            this.props.handleRegistrationClick();
        }
    }

    handleArticleDeleting =() => {
        if (this.props.isSavedNews) {
            this.props.handleArticleDeleting(this.props.article);
        } else {
            this.props.handleArticleDeleting(this.state.savedArticle);
            this.setState({
                articleIsSaved: false,
                savedArticle: null
            });

        }
    }

    formatDate = (dateString) => {
        const months = ["January","February","March","April","May","June","July",
                      "August","September","October","November","December"]
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = months[date.getMonth()];
        const day = date.getDate();

        return `${day} ${month}, ${year}`;
    }

    render() {
        return (
            <div className="card" key={this.props.index}>
                <img src={this.props.isSavedNews ? `${this.props.article.image ? this.props.article.image : notFoundImagePath}` : `${this.props.article.urlToImage ? this.props.article.urlToImage : notFoundImagePath}`} className="card__image" alt="картинка статьи"></img>
                <div className="card__wrapper">
                    <p className="card__date">{this.props.isSavedNews ? this.formatDate(this.props.article.date) : this.formatDate(this.props.article.publishedAt)}</p>
                    <p className="card__subtitle">{this.props.article.title}</p>
                    <p className="card__description">{this.props.article.description}</p>
                    <p className="card__source">{this.props.article.source.name}</p>
                </div>
        <p className={this.props.isSavedNews ? "card__keyword" : "card__keyword_hidden"}>{this.props.article.keyword}</p>
        <p  className={this.state.notLogedMessageShown ? "card__keyword-notlogedin" : "card__keyword_hidden"}>{this.state.cardMessagePoppingUp}</p>
                <button 
                onMouseOver={this.handleButtonFocus} 
                onMouseLeave={this.handleButtonUnfocus}
                type="button" className="card__save-button" >
                    <img onMouseOver={e => (e.currentTarget.src = `${this.props.isSavedNews ? deleteArticleHover : saveArticleHover}`)} 
                    onMouseLeave={e => (e.currentTarget.src = `${this.props.isSavedNews ? deleteArticle : saveArticle}`)}  
                    src={this.props.isSavedNews ? deleteArticle : `${this.state.articleIsSaved  ? saveArticleMarked : saveArticle}`}  
                    onClick={this.props.isSavedNews ? this.handleArticleDeleting : (this.state.articleIsSaved? this.handleArticleDeleting : this.handleSaveArticleClick)} alt="Знак сохранения или удаления статьи"></img>
                </button>
            </div>
        );

    }
    
}


export default NewsCard;