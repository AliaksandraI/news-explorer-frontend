import React from 'react';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';

import './App.css';



class App extends React.Component{

  /*
  constructor(){
    super();
  }
*/
  render(){
    return(
    
      <div className="page">

        <Header />

        <Main />

        <Footer />

      </div>
    )
  }


}



export default App;
