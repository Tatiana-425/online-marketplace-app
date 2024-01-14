import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import './NavBar.jsx'
import NavBar from './NavBar.jsx';
import CustomersList from './CustomersList.jsx';
import YourAccount from './YourAccount.jsx';
import ShoppingCart from './ShoppingCart.jsx';
import Login from './Login.jsx';
import "font-awesome/css/font-awesome.css";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Routes>
          <Route path="/"  element={<CustomersList/>} />
          <Route path="/account"  element={<YourAccount/>} />
          <Route path="/cart" element={<ShoppingCart/>}/>
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
