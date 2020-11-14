import React from 'react';
//import cardImage from '../../images/image_05.jpg';
import saveArticle from '../../images/tosave_button.svg';
import saveArticleHover from '../../images/tosave_button_hover.svg';
import saveArticleMarked from '../../images/tosave_button_marked.svg';
import deleteArticle from '../../images/delete_button.svg';
import deleteArticleHover from '../../images/delete_button_hover.svg';
import './NewsCard.css';


function NewsCard (props) {
    
    return (
        <div className="card" key={props.index}>
            <img src={props.article.urlToImage} className="card__image" alt="картинка статьи"></img>
            <div className="card__wrapper">
                <p className="card__date">{props.article.publishedAt}</p>
                <p className="card__subtitle">{props.article.title}</p>
                <p className="card__description">{props.article.description}</p>
                <p className="card__source">{props.article.source.name}</p>
            </div>
            <p className={props.isSavedNews ? "card__keyword" : "card__keyword_hidden"}>Природа</p>
            <button type="button" className="card__save-button" >
                <img src={props.isSavedNews ? deleteArticle : saveArticle} onMouseOver={e => (e.currentTarget.src = `${props.isSavedNews ? deleteArticleHover : saveArticleHover}`)} 
                onMouseLeave={e => (e.currentTarget.src = `${props.isSavedNews ? deleteArticle : saveArticle}`)}   
                onClick={e => (e.currentTarget.src = `${props.isSavedNews ? deleteArticle : saveArticleMarked}`)} alt="Знак сохранения статьи"></img>
            </button>
        </div>
    );
}


export default NewsCard;