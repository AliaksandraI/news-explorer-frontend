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
            notLogedMessageShown:false,
        }
    };


    handleSaveArticleClick = () => {
        if(this.props.loggedIn){
            this.props.handleArticleSaving(this.props.article)
        } else {
            this.setState({
                notLogedMessageShown: true,
            })
        }
    }

    formatDate = (dateString) => {
        let months = ["January","February","March","April","May","June","July",
                      "August","September","October","November","December"]
        let date = new Date(dateString);
        let year = date.getFullYear();
        let month = months[date.getMonth()];
        let day = date.getDate();

        return `${day} ${month}, ${year}`;
    }

    render() {
        return (
            <div className="card" key={this.props.index}>
                <img src={this.props.article.urlToImage ? this.props.article.urlToImage : notFoundImagePath} className="card__image" alt="картинка статьи"></img>
                <div className="card__wrapper">
                    <p className="card__date">{this.formatDate(this.props.article.publishedAt)}</p>
                    <p className="card__subtitle">{this.props.article.title}</p>
                    <p className="card__description">{this.props.article.description}</p>
                    <p className="card__source">{this.props.article.source.name}</p>
                </div>
                <p className={this.props.isSavedNews ? "card__keyword" : "card__keyword_hidden"}>Природа</p>
                <p className={this.state.notLogedMessageShown ? "card__keyword-notlogedin" : "card__keyword_hidden"}>Войдите, чтобы сохранять статьи</p>
                <button type="button" className="card__save-button" >
                    <img src={this.props.isSavedNews ? deleteArticle : saveArticle}  
                    onClick={this.handleSaveArticleClick} alt="Знак сохранения статьи"></img>
                </button>
            </div>
        );

    }
    
}


export default NewsCard;