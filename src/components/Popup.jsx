import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../sass/components/_popup.scss'
export default () => (
  <Popup trigger={<button className='under'>Currently under Construction</button>} position="left center">
    <div className='pop'>Popup content here !!</div>
  </Popup>
);