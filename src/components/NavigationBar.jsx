import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'
const NavigationBar = () => {
  return (
    <header>
      <header>
     <div class="topnav">
        <a class="active" href="/">Home</a>
        <a href="/med4u/articles">Articles</a>
        <a href="/med4u/chat">Chat</a>
      </div>
    </header>
    </header>
  );
};

export default NavigationBar;
