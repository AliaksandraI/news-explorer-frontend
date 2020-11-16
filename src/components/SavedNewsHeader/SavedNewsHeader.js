import React, { Component } from 'react';


import './SavedNewsHeader.css';

class SavedNewsHeader extends Component {

    constructor(props){
        super();
        this.state = {
            keywordsCount:'',
        }
    }


    render(){
        return (
            <section className="saved-news__header">
                <p className="saved-news__info">Сохранённые статьи</p>
                <h2 className="saved-news__title"><span>{this.props.currentUser.name}</span>, у вас <span>{this.props.articles.length}</span> сохранённых статей</h2>
                <p className="saved-news__description">По ключевым словам: <b>{this.props.keywordsDescription}</b> </p>       
            </section>
        );
    }
    
}

export default SavedNewsHeader;

