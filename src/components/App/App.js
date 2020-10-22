import React from 'react';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';

import './App.css';

class App extends React.Component{

  constructor(){

  }

  render(){
    return(

      <Header />

      <Search />

      <Main />

      <About />

      <Footer />
    )
  }




}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
