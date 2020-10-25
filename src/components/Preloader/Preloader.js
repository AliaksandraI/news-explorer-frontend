import React from 'react';
import notFoundImage from '../../images/not-found_image.svg';

import './Preloader.css';

function Preloader () {
    return (
        <section className="preloader">
            <i className="preloader__circle"></i>
            <img className="preloader__not-found" src={notFoundImage} alt="Ничего не найдено"></img>
            <p className="preloader__subtitle">Ничего не найдено</p>
            <p className="preloader__description">К сожалению по вашему запросу 
ничего не найдено.</p>
            
        </section>
    );
}


export default Preloader;