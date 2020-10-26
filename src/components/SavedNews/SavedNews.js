import React from 'react';
import Header from '../Header/Header.js';
import NewsCardList from '../NewsCardList/NewsCardList.js'; 
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader.js'; 
import Footer from '../Footer/Footer.js';

function SavedNews () {
    return (
        <div >
            <Header savedNews={true}/>

            <SavedNewsHeader />

            <NewsCardList />

            <Footer />
      </div>
    );
}


export default SavedNews;