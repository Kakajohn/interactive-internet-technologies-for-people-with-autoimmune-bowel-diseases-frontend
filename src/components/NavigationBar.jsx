import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../sass/components/_navbar.scss'
const NavigationBar = () => {
  return (
    <header className='head'>
     <div class="topnav">
        <Link class="active" to="/">Home</Link>
        <Link to="/med4u/articles">Articles</Link>
        <Link to="/med4u/chat">Chat</Link>
      </div>
    </header>
  );
};

export default NavigationBar;
