import React from 'react';

import './SearchForm.css';

function SearchForm () {
    return ( 
        <div className="search__wrapper">
            <input type="search" className="search__input" placeholder="Введите тему новости">
            </input>
            <p className="search__button">Искать</p>
        </div>
    );
}


export default SearchForm;