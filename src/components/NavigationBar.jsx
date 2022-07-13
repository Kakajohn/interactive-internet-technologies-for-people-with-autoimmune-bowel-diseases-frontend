import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
const NavigationBar = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid" style={{backgroundColor:'#972e3d', position:'fixed', zIndex:'1030', marginTop:'1rem'}}>
          <Link class="navbar-brand" to="/">Home</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/med4u/articles">Articles</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/med4u/chat">Chat Room</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
