import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './NavBar.jsx'
import NavBar from './NavBar.jsx';
import MainContent from './MainContent.jsx';
import YourAccount from './YourAccount.jsx';



function App() {
  return (
    <div className="App">
      <div>
      <NavBar/>
      </div>
      <div>
        <MainContent/>
      </div>
    </div>
  );
}

export default App;
