import React , { useRef,useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../sass/components/_navbar.scss';
import '../sass/components/_accordion.scss'
import {FaPlusCircle, FaHome,FaBars,FaArchive,FaArrowRight,FaCommentAlt } from "react-icons/fa";
const NavigationBar = () => {

  const [navbarOpen, setNavBarOpen] = useState(false);

  const handleToggle = () => {
    setNavBarOpen(prev => !prev)
  }

  return (
    <>     
      <nav className="topnav" >
          <button onClick={handleToggle}>{navbarOpen ? <FaPlusCircle id='nv icon' /> : <FaBars id='nv'/>}</button>          
            <div className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>
               <button onClick={handleToggle}>{navbarOpen ? <FaPlusCircle id='icon' /> : <FaBars />}</button>        
                <ul>
                  <li><Link id='option'to="/"><span><FaHome/> Home</span></Link></li>
                  <li><Link id='option' to="/med4u/articles" ><FaArchive /> Articles </Link></li>
                  <li><Link id='option' to="/med4u/chat" ><FaCommentAlt /> Chat</Link></li>
                  <li><Link id='option' to="/med4u/Login" ><FaArrowRight/> Log out</Link></li>
                  <li><Link id='option' to="/">Telemedicine</Link></li>
                  <li><Link id='option' to="/med4u/articles">Distance</Link></li>
                  <li><Link id='option' to="/med4u/chat">Autoimmune</Link></li>
                </ul>

          </div>
        </nav>
    </>   
  );
};

export default NavigationBar;
