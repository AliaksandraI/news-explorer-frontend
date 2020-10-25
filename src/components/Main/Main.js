import React from 'react';
import Search from '../Search/Search.js';
import NewsCardList from '../NewsCardList/NewsCardList.js'; 
import About from '../About/About.js';
import Preloader from '../Preloader/Preloader.js';


function Main () {
    return (
        <div >

            <Search />

            <NewsCardList />

            <Preloader />

            <About />

      </div>
    );
}


export default Main;