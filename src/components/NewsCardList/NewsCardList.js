import React from 'react';
import NewsCard from '../NewsCard/NewsCard.js';

import './NewsCardList.css';

function NewsCardList (props) {
    return (
        <section className="cards">
    
                <div className="cards__wrapper">
                    <NewsCard isSavedNews={props.isSavedNews}/>
                    <NewsCard isSavedNews={props.isSavedNews}/>
                    <NewsCard isSavedNews={props.isSavedNews}/>
                </div>
           
        </section>
    );
}


export default NewsCardList;