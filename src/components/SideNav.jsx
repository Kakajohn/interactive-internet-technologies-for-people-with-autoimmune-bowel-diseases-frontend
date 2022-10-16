import React, { useEffect, useState } from 'react';
import '../sass/components/_sidenav.scss';
import { Link } from 'react-router-dom';
import { FaPlusCircle, FaHome, FaBars, FaArchive, FaArrowRight, FaCommentAlt } from 'react-icons/fa';
const SideNav = () => {
  let [see, setSee] = useState(false);

  let expand = () => {
    setSee(true);
    document.getElementById('expand').style.visibility = 'collapse';
  };

  let collapse = () => {
    setSee(false);
    document.getElementById('collapse').style.width = '0px';
    document.getElementById('expand').style.visibility = 'visible';
  };

  useEffect(() => {
    if (see === false) {
      collapse();
    } else {
      expand();
    }
  }, [setSee]);

  return (
    <>
      <p id='collapse'></p>
      <span className='togg' id='expand' onClick={expand}>
        {' '}
        <FaBars id='icon' />
      </span>
      {see && (
        <div className='sidenav' id=''>
          <Link to='' onClick={collapse} className='close' id='collapse' style={{ transform: 'rotate(45deg)' }}>
            <FaPlusCircle id='icon' />
          </Link>
          <Link to='/' id='option'>
            <span>
              <FaHome /> Home
            </span>
          </Link>
          <Link to='/med4u/articles' id='option'>
            <FaArchive /> Articles{' '}
          </Link>
          <Link to='/med4u/chat' id='option'>
            <FaCommentAlt /> Chat
          </Link>
          <Link to='/med4u/Login' id='option'>
            <FaArrowRight /> Log out
          </Link>
        </div>
      )}
    </>
  );
};

export default SideNav;
