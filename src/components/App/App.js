import React from 'react';
import { BrowserRouter, Route, Redirect, Switch, Router } from 'react-router-dom';
import Main from '../Main/Main.js';
import SavedNews from '../SavedNews/SavedNews.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import history from '../../utils/History.js';
import './App.css';

export const CurrentUser = React.createContext();

class App extends React.Component{

  static contextType = CurrentUser;

  constructor(){
    super();
    this.state = {
      currentUser: this.createDefaultUser(),
      loggedIn: false,
    
    }
  }

  createDefaultUser = () => {
    return {
        _id: -1,
        name: 'No name',
        about: 'No description',
        avatar: 'FakeAvatarPath'
    };
}


  render(){
    return(
      <Router history={history}>
        <BrowserRouter>
          <div className="page">
          <CurrentUser.Provider>
            <Switch>
                <Route path="/" component={Main} exact/>
                <ProtectedRoute path="/saved-news" component={SavedNews}
                  currentUser={this.state.currentUser}
                  
                  />
                <Route path="*">
                  { this.state.loggedIn ? <Redirect to="/saved-news" /> : <Redirect to="/" /> }
                </Route>
            </Switch>
            </CurrentUser.Provider>
          </div>
        </BrowserRouter>
      </Router>
    )
  }


}



export default App;
