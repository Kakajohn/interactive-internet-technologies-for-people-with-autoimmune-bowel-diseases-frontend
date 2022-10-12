import React from 'react'
import { useRef,useEffect, useState } from 'react';
import NavigationBar from './NavigationBar'
import '../sass/components/_articles.scss'
import Footer from './Footer'
import FamilialAdenomatous from './FamilialAdenomatous';
import Crohn from './Crohn';
const Articles = () => {

  // const [click, setClick] = useState(false)

  // const [clicked, setClicked] = useState(false)

  // let [count, setCount] = useState(0);

  // const ref = useRef(null);

  // const showmore = () => {
  //    setClick(true);
  //    document.getElementById('less').style.visibility = 'visible';
  //    document.getElementById('read').style.visibility = 'collapse' ;      
  //    count ++;
  //    setCount(count)
  //    console.log(count)
  // }

  // const showless = () => {
  //   setClick(false);
  //   document.getElementById('less').style.visibility = 'collapse';
  //   document.getElementById('read').style.visibility = 'visible';
   
  // }
  // const show = () => {
  //   setClicked(true);
  //   document.getElementById('less2').style.visibility = 'visible';
  //   document.getElementById('read2').style.visibility = 'collapse' ;
  // }
  // const hide = () => {
  //   setClicked(false);
  //   document.getElementById('less2').style.visibility = 'hidden';
  //   document.getElementById('read2').style.visibility = 'visible' ;
  // }
  // useEffect(()=>{
  //   if(click === false || clicked === false){
  //     document.getElementById('more').style.visibility = 'collapse' ;
  //     document.getElementById('less').style.visibility = 'collapse';
  //     document.getElementById('read').style.visibility = 'visible' ;

  //     document.getElementById('more2').style.visibility = 'collapse' ;
  //     document.getElementById('less2').style.visibility = 'collapse';
  //     document.getElementById('read2').style.visibility = 'visible' ;
  //     console.log(click, setClick)
  //   }else if(click === true || clicked === true) {
  //     document.getElementById('read').style.visibility = 'collapse' ;
  //     document.getElementById('more').style.visibility = 'visible' ;

  //     document.getElementById('read2').style.visibility = 'collapse' ;
  //     document.getElementById('more2').style.visibility = 'visible' ;
  //   }
  // },[setClick])
  return (
    <>
    <NavigationBar />
    <div className="content-a">        
      <div className="secondary-a">
        <div className="col-8 ">
          <FamilialAdenomatous />
           </div>
      </div>
      <div className="secondary-a" id='define-new-section'>
      <div className="col-8 ">
        <Crohn />
      </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Articles