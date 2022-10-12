import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../sass/components/_navbar.scss';
import '../sass/components/_accordion.scss'
import {Accordion} from 'react-bootstrap-accordion'
import SideNav from './SideNav';

const NavigationBar = () => {
  return (
    <header className='head'>
        <SideNav />
     <div className="topnav">
        <Link className="navbtn navbtn-3" to="/">Telemedicine</Link>
        <Link className='navbtn navbtn-3' to="/med4u/articles">Distance</Link>
        <Link className='navbtn navbtn-3' to="/med4u/chat">Autoimmune</Link>
      </div>
    </header>
  );
};

export default NavigationBar;
