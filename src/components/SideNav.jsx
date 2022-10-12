import React , { useRef,useEffect, useState } from 'react';
import '../sass/components/_sidenav.scss'
import { Link, useNavigate } from 'react-router-dom';
import {FaPlusCircle, FaHome,FaBars,FaArchive,FaAngleDown,FaAngleUp, faPlussCircle } from "react-icons/fa";
const SideNav = () => {
    let [see, setSee] = useState(false);


    let expand = () => {
        setSee(true);
        document.getElementById('expand').style.width = '250px'
    }

    let collapse = () => {
        setSee(false);
        document.getElementById('collapse').style.width = '0px';
        document.getElementById('main').style.marginLeft = '0px'
    }

    useEffect(() =>{
        if(see === false){
            collapse();
        }else {
            expand();
        }
    },[setSee])

  return (
    <> <p id='collapse'></p>
    <span className='togg' id='expand' onClick={expand}> <FaBars /></span>
   {see &&  (<div className="sidenav" id=''>
        <Link to="" onClick={collapse} className='close' id='collapse' style={{transform: "rotate(45deg)"}}><FaPlusCircle /></Link>
        <Link to="/" id='option'><FaHome/></Link>
        <Link to="/med4u/articles" id='option'>Articles <FaArchive /></Link>
        <Link to="/med4u/chat" id='option'>Chat</Link>
        <Link to="/med4u/Login" id='option'>Log out</Link>
    </div>)}
    <div id='main'></div>
    </>
  )
}

export default SideNav