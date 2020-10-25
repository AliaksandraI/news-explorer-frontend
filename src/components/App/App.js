import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../Main/Main.js';
import SavedNews from '../SavedNews/SavedNews.js';


import './App.css';



class App extends React.Component{

  /*
  constructor(){
    super();
  }
*/
  render(){
    return(
      <BrowserRouter>
        <div className="page">
          <Switch>
              <Route path="/" component={Main} exact/>
              <Route path="/saved-news" component={SavedNews}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }


}



export default App;
