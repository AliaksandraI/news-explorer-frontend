import React from 'react';
import Header from '../Header/Header.js';
/*import Search from '../Search/Search.js';
import Main from '../Main/Main.js';
import About from '../About/About.js';
*/
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

        <Footer />

      </div>
    )
  }


}



export default App;
