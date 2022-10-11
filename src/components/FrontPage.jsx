import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import MedCareSection from './MedCareSection';
import Popup from './Popup';

const FrontPage = () => {
  return (
    <>
      <Popup />
      <NavigationBar />
      <MedCareSection />  
      <Footer />
    </>
  );
};

export default FrontPage;
