import React from 'react';

import './Search.css';

function Search () {
    return (
        <div className="search">
            <h1 className="search__title">Что творится в мире?</h1>
            <h2 className="search__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</h2>
                <div className="search__wrapper">
                    Введите тему новости
                    <p className="search__button">Искать</p>
                </div>
        </div>
    );
}


export default Search;