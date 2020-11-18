import React from 'react';
import { Route, Redirect, Switch, Router } from 'react-router-dom';
import Main from '../Main/Main.js';
import SavedNews from '../SavedNews/SavedNews.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import history from '../../utils/History.js';
import api from '../../utils/MainApi.js';
import * as auth from '../../utils/Auth.js';
import * as newsSearch from '../../utils/NewsApi.js';
import './App.css';


class App extends React.Component{

  

  constructor(){
    super();
    this.state = {
      loggedIn: false,
      preloaderSectionVisible:false,
      isPreloading: false,
      isNothingFound: true,
      articles: [],
      savedArticles: [],
      visibleCount: 3,
      currentUser: this.createDefaultUser(),
      keyword:'',
      keywordsDescription:''
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.handleTokenCheck = this.handleTokenCheck.bind(this);

  }

  componentDidMount() {
    this.handleTokenCheck();
  }

  onArticleListClick = () => {
    if (this.state.articles.length > this.state.visibleCount) {
        const maxArticlesAmount = 3;
        let increment = 3;
        if(this.state.articles.length - this.state.visibleCount < maxArticlesAmount) {
            increment = this.state.articles.length - this.state.visibleCount;
        }
        this.setState({
            visibleCount: this.state.visibleCount + increment,
        })
    }
  }

  authorize = (email, password) => {
    return auth.authorize(email, password)
  }

  register = (name, email, password ) => {
      return auth.register(name, email, password)
  }

  getInitialArticles = () => {
    let savedArticles = JSON.parse(localStorage.getItem('saved_articles'));

    if (savedArticles) {
      this.setState({ 
        savedArticles: savedArticles,
        keywordsDescription: this.getKeywordDescription(savedArticles)
      });
    } else {
      api.getInitialArticles()
      .then(articles => {
          localStorage.setItem('saved_articles', JSON.stringify(articles));
          this.setState({ 
            savedArticles: articles,
            keywordsDescription: this.getKeywordDescription(articles)
          });
      }).catch(err => {
          console.log(err);
      });
    }
  }


  getLatestSearchResults = () => {
    let latestSearchResults = JSON.parse(localStorage.getItem('latest_search_result'));
    let latestSearchKeyword = localStorage.getItem('latest_search_keyword');

    if(latestSearchResults && latestSearchResults.length>0) {
      this.setState({
        articles: latestSearchResults,
        preloaderSectionVisible:false,
        isPreloading: false,
        isNothingFound: false,
        visibleCount: 3,
        keyword: latestSearchKeyword
      });
    }

  }

  getKeywordDescription = (articles) => {
    const keywords = {};
    for (var i = 0; i < articles.length; i++) {
      if (!(articles[i].keyword in keywords)) {
        keywords[articles[i].keyword] = 0;
      }
      keywords[articles[i].keyword]++;
    }

    let keyword1='', keyword2='';
    let count1 = 0, count2 = 0;
    let keywordCount = 0;
    for(var keyword in keywords) {
      keywordCount++;
      if (keywords[keyword] > count1) {
        count1 = keywords[keyword];
        keyword1 = keyword;
      }
      else if (keywords[keyword] > count2 && keywords[keyword] <= count1 && keyword !== keyword1) {
        count2 = keywords[keyword];
        keyword2 = keyword;
      }
    }

    let keywordsDescription = 'ключевые слова отсутствуют';

    if (articles.length !== 0) {
        if(keywordCount === 1){
          keywordsDescription = keyword1;
        } else if(keywordCount === 2){
          keywordsDescription = `${keyword1}, ${keyword2}`;
        } else if(keywordCount === 3){
          keywordsDescription = `${keyword1}, ${keyword2} и 1-м другим`;
        } else {
          keywordsDescription = `${keyword1}, ${keyword2} и ${keywordCount-2} другими`;
        }
    }

    return keywordsDescription;

  }


  getUserInfo = () => {
    api.getUserInfo()
    .then(user => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.setState({ currentUser: JSON.parse(localStorage.getItem('currentUser')) });
    })
    .catch(err => {
        this.setState({ currentUser: this.createDefaultUser() });
        console.log(err);
    });
  }

  enablePreloader = () => {
    this.setState({
      preloaderSectionVisible: true,
      isNothingFound: false,
    });
  }

  
  sendNewsRequest = (request) => {
    this.setState({
      keyword: request
    });
    return newsSearch.sendRequest(request)
      .then((res)=>{
        if(res.totalResults > 0){
          localStorage.setItem('latest_search_result', JSON.stringify(res.articles));
          localStorage.setItem('latest_search_keyword', request);
          this.setState({
              articles: res.articles,
              preloaderSectionVisible:false,
              isPreloading: false,
              isNothingFound: false,
              visibleCount: 3
          });
        } else {          
          this.setState({
            preloaderSectionVisible:true,
            isPreloading: false,
            isNothingFound: true,
            visibleCount: 0,
        });
        }
      })
      .catch(err => {
        console.log(err);
    });
  }
 
  handleArticleSaving = (article)  => {
    return api.addNewArticle(article, this.state.keyword)
          .then((article) => {
              let savedArticles = [...this.state.savedArticles, article];
              localStorage.setItem('saved_articles', JSON.stringify(savedArticles));
              this.setState({ savedArticles:  savedArticles});
          })
          .catch(err => {
              console.log(err);
          });
  }


  handleArticleDeleting = (article) => {
    api.deleteArticle(article._id)
        .then(() => {
            const newArticles = this.state.savedArticles.filter((a) => a._id !== article._id);
            localStorage.setItem('saved_articles', JSON.stringify(newArticles));
            this.setState({ savedArticles: newArticles });
        }).catch(err => {
            console.log(err);
        });
}
  

  handleTokenCheck() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
        auth.checkToken(jwt).then((res) => {
            if (res) {
                this.setState({
                    loggedIn: true,
                    UserData: {
                        email: res.email
                    }
                }, () => {
                    this.getUserInfo();
                    this.getInitialArticles();
                    this.getLatestSearchResults();
                    history.push("/");
                });
            }
        });
    }
  }

  handleLogin = () => {
    this.getUserInfo();
    this.setState({
        loggedIn: true
    }, () => { this.handleTokenCheck()});
  }

  handleLogOut = () => {
      localStorage.removeItem('jwt');
      localStorage.removeItem('currentUser');
      localStorage.removeItem('saved_articles');
      localStorage.removeItem('latest_search_result');
      localStorage.removeItem('latest_search_keyword');
      this.setState({
        loggedIn: false,
        preloaderSectionVisible:false,
        isPreloading: false,
        isNothingFound: true,
        articles: [],
        savedArticles: [],
        visibleCount: 3,
        currentUser: this.createDefaultUser(),
        keyword:'',
        keywordsDescription:''
      });
  }

  createDefaultUser = () => {
    return {
        _id: -1,
        name: 'No name',
        about: 'No description',
    };
}


  render(){
    return(
      <Router history={history}>
        
          <div className="page">
          
            <Switch>
                <Route path="/" exact>
                    <Main 
                          currentUser={this.state.currentUser}
                          articles={this.state.articles.slice(0, this.state.visibleCount)}
                          onArticleListClick = {this.onArticleListClick}
                          areThereMoreArticles = {this.state.articles.length > this.state.visibleCount}
                          preloaderSectionVisible={this.state.preloaderSectionVisible} 
                          loggedIn={this.state.loggedIn}
                          handleArticleSaving={this.handleArticleSaving} 
                          handleArticleDeleting={this.handleArticleDeleting}
                          enablePreloader={this.enablePreloader}
                          isPreloading={this.state.loggedIn}  
                          isNothingFound={this.state.isNothingFound} 
                          handleLogin={this.handleLogin} 
                          handleLogOut={this.handleLogOut} 
                          authorize={this.authorize} 
                          register={this.register} 
                          sendNewsRequest={this.sendNewsRequest}
                          />
                </Route>
                <ProtectedRoute path="/saved-news" 
                      keywordsDescription={this.state.keywordsDescription}
                      loggedIn={this.state.loggedIn}
                      currentUser={this.state.currentUser}
                      getUserInfo = {this.getUserInfo}
                      articles={this.state.savedArticles}
                      handleArticleDeleting={this.handleArticleDeleting}
                      handleLogOut={this.handleLogOut} 
                      component={SavedNews}
                    />
                
                <Route path="*">
                  { this.state.loggedIn ? <Redirect to="/" /> : <Redirect to="/" /> }
                </Route>
            </Switch>
           
          </div>
        
      </Router>
    )
  }


}



export default App;
