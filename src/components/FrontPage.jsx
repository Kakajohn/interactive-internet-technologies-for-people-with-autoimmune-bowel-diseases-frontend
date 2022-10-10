import React from 'react';
import '../sass/components/_top_button.scss';
import '../sass/components/_navbar.scss';
import { Link, useNavigate } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

import MedCareSection from './MedCareSection';
import Popup from './Popup';
const FrontPage = () => {
  return (
    <>
      {/* header */}
      <Popup />
      <NavigationBar />
      {/* main content */}
      <div className='container'>
        <div className='row'>
          <div className='col-10' style={{marginLeft:'4rem'}}>
            <MedCareSection />
          </div>

         
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FrontPage;
