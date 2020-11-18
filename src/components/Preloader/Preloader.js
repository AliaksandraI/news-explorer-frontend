import React from 'react';
import notFoundImage from '../../images/not-found_image.svg';

import './Preloader.css';

function Preloader (props) {
    return (
        <section className={`preloader ${props.visibility}` }>
            <i className={props.isNothingFound ? "preloader__circle_hidden" : "preloader__circle"}></i>
            <img className={ props.isNothingFound ? "preloader__not-found " : "preloader__subtitle_hidden"} src={notFoundImage} alt="Ничего не найдено"></img>
            <p className={props.isNothingFound ? "preloader__subtitle " : "preloader__subtitle_hidden"}>Ничего не найдено</p>
            <p className="preloader__description">{props.isNothingFound ? `К сожалению по вашему запросу ничего не найдено.` : `Идет поиск новостей...`}</p>
            
        </section>
    );
}


export default Preloader;