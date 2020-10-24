import React from 'react';
import NewsCard from '../NewsCard/NewsCard.js';
//import photo from '../../images/avatar_author.jpg';

import './NewsCardList.css';

function NewsCardList () {
    return (
        <section>
            <h2 className="cards__title">Результаты поиска</h2>
            <NewsCard />
            <div className="cards__button">Показать еще</div>
        </section>
    );
}


export default NewsCardList;