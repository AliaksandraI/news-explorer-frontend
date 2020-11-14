import React from 'react';
import { BrowserRouter, Route, Redirect, Switch, Router } from 'react-router-dom';
import Main from '../Main/Main.js';
import SavedNews from '../SavedNews/SavedNews.js';
//import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import history from '../../utils/History.js';
import api from '../../utils/Api.js';
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
      visibleCount: 3
    }
  }

  onArticleListClick = () => {
    if (this.state.articles.length > this.state.visibleCount) {
        let increment = 3;
        if(this.state.articles.length - this.state.visibleCount < 3) {
            increment = this.state.articles.length - this.state.visibleCount;
        }
        this.setState({
            visibleCount: this.state.visibleCount + increment,
        })
    }
  }

  componentDidMount() {
    this.handleTokenCheck();
}

  authorize = (email, password) => {
    return auth.authorize(email, password)
  }

  register = (name, email, password ) => {
      return auth.register(name, email, password)
  }

  sendNewsRequest = (request) => {
    this.setState({
      preloaderSectionVisible:true,
      isPreloading: true,
    });
    return newsSearch.sendRequest(request)
      .then((res)=>{
        console.log(res)
        if(res.totalResults > 0){
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
            visibleCount: 0
        });
        }
      })
      .catch(err => {
        console.log(err);
    });
  }

  handleArticleSaving = (article)  => {
    api.addNewArticle(article)
        .then((article) => {
            console.log(article);
            this.setState({ savedArticles: [...this.state.savedArticles, article] });
        })
        .catch(err => {
            console.log(err);
        });
  }
  

  handleTokenCheck() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
        auth.checkToken(jwt).then((res) => {
            console.log(res);
            if (res) {
                this.setState({
                    loggedIn: true,
                    UserData: {
                        email: res.email
                    }
                }, () => {
                    history.push("/saved-news");
                });
            }
        });
    }
  }

  handleLogin = () => {
    this.setState({
        loggedIn: true
    }, () => { this.handleTokenCheck()});
  }

  handleLogout = () => {
      localStorage.removeItem('jwt');
      this.setState({
          loggedIn: false,
      });
  }

  render(){
    return(
      <Router history={history}>
        <BrowserRouter>
          <div className="page">
            <Switch>
                <Route path="/" exact>
                    <Main articles={this.state.articles.slice(0, this.state.visibleCount)}
                          onArticleListClick = {this.onArticleListClick}
                          areThereMoreArticles = {this.state.articles.length > this.state.visibleCount}
                          preloaderSectionVisible={this.state.preloaderSectionVisible} 
                          loggedIn={this.state.loggedIn}
                          handleArticleSaving={this.handleArticleSaving} 
                          isPreloading={this.state.loggedIn}  
                          isNothingFound={this.state.isNothingFound} 
                          handleLogin={this.handleLogin} 
                          handleLogOut={this.handleLogOut} 
                          authorize={this.authorize} 
                          register={this.register} 
                          sendNewsRequest={this.sendNewsRequest}/>
                </Route>
                <Route path="/saved-news" >
                    < SavedNews />
                </Route>
                <Route path="*">
                  { this.state.loggedIn ? <Redirect to="/saved-news" /> : <Redirect to="/" /> }
                </Route>
            </Switch>
            
          </div>
        </BrowserRouter>
      </Router>
    )
  }


}



export default App;
