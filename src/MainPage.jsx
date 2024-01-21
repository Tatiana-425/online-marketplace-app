import React, { Component } from 'react';
import YourAccount from './YourAccount.jsx';
import "font-awesome/css/font-awesome.css";

export default class MainPage extends Component {
  render() {
    return (
      <React.Fragment>
        <ul class="links-container">
    <li class="link-item"><a href="/for-home" class="link">home</a></li>
    <li class="link-item"><a href="/women" class="link">women</a></li>
    <li class="link-item"><a href="/men" class="link">men</a></li>
    <li class="link-item"><a href="/kids" class="link">kids</a></li>
    <li class="link-item"><a href="/electronics" class="link">electronics</a></li>
    <li class="link-item"><a href="/pets" class="link">pets</a></li>
</ul>
      </React.Fragment>
    )
  }
};

