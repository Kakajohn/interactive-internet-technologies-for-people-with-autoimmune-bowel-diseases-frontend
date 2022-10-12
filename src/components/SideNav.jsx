import React , { useRef,useEffect, useState } from 'react';
import '../sass/components/_sidenav.scss'
import {FaPlusCircle, FaHome,FaBars,FaArchive,FaAngleDown,FaAngleUp, faPlussCircle } from "react-icons/fa";
const SideNav = () => {
    let [see, setSee] = useState(false);


    let expand = () => {
        setSee(true);
        document.getElementById('expand').style.width = '250px'
        document.getElementById('togg').style.visibility = 'collapse'
        document.getElementById('main').style.marginLeft = '250px'
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
    <span className='togg' id='expand test' onClick={expand}> <FaBars /></span>
   {see &&  (<div className="sidenav" id=''>
        <a href="" onClick={collapse} className='close' id='collapse' style={{transform: "rotate(45deg)"}}><FaPlusCircle /></a>
        <a href="/" id='option'><FaHome/></a>
        <a href="/med4u/articles" id='option'>Articles <FaArchive /></a>
        <a href="/med4u/chat" id='option'>Chat</a>
        <a href="/med4u/Login" id='option'>Log out</a>
    </div>)}
    <div id='main'></div>
    </>
  )
}

export default SideNav