import React from 'react';
import SearchForm from '../SearchForm/SearchForm.js';

import './Search.css';

function Search (props) {
    return (
        <section className="search">
            <h1 className="search__title">Что творится в мире?</h1>
            <h2 className="search__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</h2>
            <SearchForm sucessfulSearchRequest={props.sucessfulSearchRequest} sendNewsRequest={props.sendNewsRequest} EnablePreloader={props.EnablePreloader}/>
        </section>
    );
}


export default Search;