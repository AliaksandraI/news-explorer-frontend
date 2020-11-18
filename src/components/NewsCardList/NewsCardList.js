import React from 'react';
import NewsCard from '../NewsCard/NewsCard.js';

import './NewsCardList.css';

function NewsCardList (props) {
    return (
        <section className="cards">
                <div className="cards__wrapper">
                    {props.articles.map((article, i ) => (
                        <NewsCard  article={article} index={i} key={i} loggedIn={props.loggedIn} handleArticleSaving={props.handleArticleSaving} handleArticleDeleting={props.handleArticleDeleting} handleRegistrationClick={props.handleRegistrationClick} isSavedNews={props.isSavedNews}/>
                        )
                    )}
                </div>
           
        </section>
    );
}


export default NewsCardList;