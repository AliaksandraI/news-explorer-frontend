import React from 'react';


import './SavedNewsHeader.css';

function SavedNewsHeader () {
    return (
        <section className="saved-news__header">
            <p className="saved-news__info">Сохранённые статьи</p>
            <h2 className="saved-news__title">Грета, у вас 5 сохранённых статей</h2>
            <p className="saved-news__description">По ключевым словам: <b>Природа, Тайга </b> и <b>2-м другим</b></p>       
        </section>
    );
}

export default SavedNewsHeader;