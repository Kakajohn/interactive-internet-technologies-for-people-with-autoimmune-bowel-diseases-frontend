import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const NavigationBar = () => {
  return (
    <header>
      {/* <nav  >
        <div class='menu-icon'>
          <i class='fa fa-bars fa-2x'></i>
        </div>
        <div class='logo'></div>
        <div class='menu'>
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to='/med4u/articles'> Articles</Link>
            </li>
            <li>
              <Link to='/med4u/chat'>Chat</Link>
            </li>
          </ul>
        </div>
      </nav> */}
      <nav className='navbar navbar-expand-lg navbar-dark fixed-top' style={{ backgroundColor: '#972e3d' }}>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            Med for You
          </Link>

          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse align-items-center justify-content-end' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link' active='true' aria-current='page' to='/med4u/articles'>
                  Articles
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' active='true' aria-current='page' to='/med4u/chat'>
                  Chat
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
