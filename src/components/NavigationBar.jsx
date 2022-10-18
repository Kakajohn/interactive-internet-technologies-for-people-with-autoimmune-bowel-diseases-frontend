import React , { useRef,useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../sass/components/_navbar.scss';
import '../sass/components/_accordion.scss'
import {FaPlusCircle,FaLinkedin} from "react-icons/fa";
const NavigationBar = () => {

  // let [help, setHelp] = useState(false);


  // let show = () => {
  //     setHelp(true);
  //     document.getElementById('show').style.visibility = 'collapse'
  // }

  // let hide = () => {
  //     setHelp(false);
  //     document.getElementById('hide').style.width = '0px';
  //     document.getElementById('show').style.visibility = 'visible'
  // }

  // useEffect(() =>{
  //     if(help === false){
  //         hide();
  //     }else {
  //         show();
  //     }
  // },[setHelp])

  const [navbarOpen, setNavBarOpen] = useState(false);

  return (
    <>     
      {/* <p id='hide'></p> */}
      {/* <a className='helper' id='show' onClick={show}>Help</a>
      { help && ( */}
      <div className="topnav" >
          {/* <span  id='hide' onClick={hide}>
            <FaPlusCircle className='exit'/></span> */}
          <Link className="navbtn navbtn-3" to="/">Telemedicine</Link>
          <Link className='navbtn navbtn-3' to="/med4u/articles">Distance</Link>
          <Link className='navbtn navbtn-3' to="/med4u/chat">Autoimmune</Link>
        </div>
         {/* )}  */}
    </>   
  );
};

export default NavigationBar;
