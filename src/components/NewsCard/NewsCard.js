import React from 'react';
import cardImage from '../../images/image_05.jpg';
import saveArticle from '../../images/tosave_button.svg';
import './NewsCard.css';


function NewsCard () {
    return (
        <div className="card">
            <img src={cardImage} className="card__image" alt="картинка статьи"></img>
            <div className="card__wrapper">
                <p className="card__date">2 августа, 2019</p>
                <p className="card__subtitle">Национальное достояние – парки</p>
                <p className="card__description">В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
                <p className="card__source">Лента.ру</p>
            </div>
            <button type="button" className="card__save-button" >
                <img src={saveArticle} alt="Знак сохранения статьи"></img>
            </button>
        </div>
    );
}


export default NewsCard;