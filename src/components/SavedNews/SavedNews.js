import React from 'react';
import Header from '../Header/Header.js';
import NewsCardList from '../NewsCardList/NewsCardList.js'; 
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader.js'; 
import Footer from '../Footer/Footer.js';

class SavedNews extends React.Component {


    componentDidMount() {
        this.props.getInitialArticles();
        console.log(this.props.articles)
    }

    render(){

        return (
            <div >
                
                <Header isHeaderForMain={false} currentUser={this.props.currentUser} handleLogOut={this.props.handleLogOut}/>
                <SavedNewsHeader 
                articles={this.props.articles} 
                keyword1={this.props.keyword1}
                keyword2={this.props.keyword2}
                keywordsCount={this.props.keywordsCount}
                />
                <NewsCardList articles={this.props.articles} handleArticleDeleting={this.props.handleArticleDeleting} isSavedNews={true} />
                <Footer />

          </div>
        );
    }
    
}


export default SavedNews;