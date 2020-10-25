import React from 'react';
import NewsCard from '../NewsCard/NewsCard.js';

import './NewsCardList.css';

function NewsCardList () {
    return (
        <section className="cards">
    
                <div className="cards__wrapper">
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </div>
           
        </section>
    );
}


export default NewsCardList;