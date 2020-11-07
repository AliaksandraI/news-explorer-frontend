import React from 'react';
import cardImage from '../../images/image_05.jpg';
import saveArticle from '../../images/tosave_button.svg';
import saveArticleHover from '../../images/tosave_button_hover.svg';
import saveArticleMarked from '../../images/tosave_button_marked.svg';
import deleteArticle from '../../images/delete_button.svg';
import deleteArticleHover from '../../images/delete_button_hover.svg';
import './NewsCard.css';


function NewsCard (props) {
    
    return (
        <div className="card">
            <img src={cardImage} className="card__image" alt="картинка статьи"></img>
            <div className="card__wrapper">
                <p className="card__date">2 августа, 2019</p>
                <p className="card__subtitle">Национальное достояние – парки</p>
                <p className="card__description">В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
                <p className="card__source">Лента.ру</p>
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