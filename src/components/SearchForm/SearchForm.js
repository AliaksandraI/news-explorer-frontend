import React from 'react';

import './SearchForm.css';

function SearchForm () {
    return ( 
        <div className="search__wrapper">
            <input type="search" className="search__input" placeholder="Введите тему новости">
            </input>
            <button className="search__button">Искать</button>
        </div>
    );
}


export default SearchForm;