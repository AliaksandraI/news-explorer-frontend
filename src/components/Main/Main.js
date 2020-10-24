import React from 'react';
import Search from '../Search/Search.js';
import NewsCardList from '../NewsCardList/NewsCardList.js'; 
import About from '../About/About.js';


function Main () {
    return (
        <div >

            <Search />

            <NewsCardList />

            <About />

      </div>
    );
}


export default Main;