import React from 'react';
import NewsCard from '../NewsCard/NewsCard.js';

import './NewsCardList.css';

function NewsCardList () {
    return (
        <section className="cards">
            <h2 className="cards__title">Результаты поиска</h2>
                <div className="cards__wrapper">
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </div>
            <div className="cards__button-wrapper">
                <button className="cards__button">Показать еще</button>
            </div>
        </section>
    );
}


export default NewsCardList;