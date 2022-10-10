import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../sass/components/_navbar.scss';
import '../sass/components/_accordion.scss'
import {Accordion} from 'react-bootstrap-accordion'

const NavigationBar = () => {
  return (
    <header className='head'>
     <div class="topnav">
        <Link className="navbtn navbtn-3" to="/">Home</Link>
        <Link className='navbtn navbtn-3' to="/med4u/articles">Articles</Link>
        <Link className='navbtn navbtn-3' to="/med4u/chat">Chat</Link>
        {/* <Accordion title='Navigate'>               
                 <div className="row" style={{color:"#fff"}}>
                 <a href='#medcare'>Medical Care</a>         
                  <a href='#need'>Telemedicine</a>     
                  <a href='#auto'>Autoimmune Diseases</a>          
                  <a href='#medit'>Medical IT</a>        
                  <a href='#follow'>Patients from Home</a>      
                  </div>     
        </Accordion> */}
        {/* <Accordion title='Navigate'>               
                 <div className="row" style={{color:"#fff"}}>
                 <a href='#medcare'>Medical Care</a>         
                  <a href='#need'>Telemedicine</a>     
                  <a href='#auto'>Autoimmune Diseases</a>          
                  <a href='#medit'>Medical IT</a>        
                  <a href='#follow'>Patients from Home</a>      
                  </div>     
        </Accordion> */}
      </div>
    </header>
  );
};

export default NavigationBar;
