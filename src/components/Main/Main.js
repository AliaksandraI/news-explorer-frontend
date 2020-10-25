import React from 'react';
import Header from '../Header/Header.js';
import Search from '../Search/Search.js';
import NewsCardList from '../NewsCardList/NewsCardList.js'; 
import About from '../About/About.js';
import Preloader from '../Preloader/Preloader.js';
import Footer from '../Footer/Footer.js';

import '../NewsCardList/NewsCardList.css';

function Main () {
    return (
        <div >
            <Header />
            <Search />
            <section>
                <h2 className="cards__title">Результаты поиска</h2>
                <NewsCardList />
                <div className="cards__button-wrapper">
                <button className="cards__button">Показать еще</button>
            </div>
            </section>
            <Preloader />
            <About />
            <Footer />
      </div>
    );
}


export default Main;