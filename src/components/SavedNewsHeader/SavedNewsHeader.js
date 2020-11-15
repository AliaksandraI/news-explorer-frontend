import React from 'react';


import './SavedNewsHeader.css';

function SavedNewsHeader (props) {
    return (
        <section className="saved-news__header">
            <p className="saved-news__info">Сохранённые статьи</p>
            <h2 className="saved-news__title">Грета, у вас <span>{props.articles.length}</span> сохранённых статей</h2>
            <p className="saved-news__description">По ключевым словам: <b>{props.keyword1}</b>, <b>{props.keyword2}</b> и <b>{props.keywordsCount} другим</b></p>       
        </section>
    );
}

export default SavedNewsHeader;

