import React, { Component } from 'react';
import YourAccount from './YourAccount.jsx';
import "font-awesome/css/font-awesome.css";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbarstyle">
          <div className="container-fluid">
            <a className="navbar-brand" href="/#">
              Green Monkey
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/cart">
                    Cart
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Your Profile
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a button className="dropdown-item btn-secondary" onClick={this.method} href="/account" >
                        Your Account
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Favorites
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sign Out
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/Register">
                    Register
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success SearchButton" type="submit">
                <i className="fas fa-search"></i>
                    Search
                </button>
                <span style={{ marginLeft: '10px' }}></span>
                <div className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </div>
                <span style={{ marginLeft: '10px' }}></span>
                <div className="nav-item">
                  <a className="nav-link" href="/customerslist">
                    Customers
                  </a>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
