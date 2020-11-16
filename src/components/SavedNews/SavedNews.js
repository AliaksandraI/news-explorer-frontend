import React from 'react';
import Header from '../Header/Header.js';
import NewsCardList from '../NewsCardList/NewsCardList.js'; 
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader.js'; 
import Footer from '../Footer/Footer.js';

class SavedNews extends React.Component {


    componentDidMount() {
        this.props.getInitialArticles();
    }

    render(){

        return (
            <div >
                
                <Header isHeaderForMain={false} currentUser={this.props.currentUser} handleLogOut={this.props.handleLogOut}/>
                <SavedNewsHeader 
                currentUser={this.props.currentUser}
                articles={this.props.articles} 
                keywordsDescription={this.props.keywordsDescription}
                />
                <NewsCardList articles={this.props.articles} handleArticleDeleting={this.props.handleArticleDeleting} isSavedNews={true} />
                <Footer />

          </div>
        );
    }
    
}


export default SavedNews;