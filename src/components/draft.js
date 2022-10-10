import React from 'react';
import '../sass/components/_top_button.scss';
import '../sass/components/_navbar.scss';
import '../sass/components/_articles.scss';
import { Link, useNavigate } from 'react-router-dom';
import NavigationBar from './NavigationBar';

const Articles = () => {

  return (
    <>
      <NavigationBar />
      <div class='container'>
        <div class='row'>
          <div class='col-8'>
            <section id='medcare' className='row'>
              <div className='col-12'style={{marginLeft:'4rem'}}>
                <h1 className='text-center text-danger'>Familial Adenomatous Polyposis (F.A.P.)</h1>
                <div className='card text-light' style={{ backgroundColor: '#151515' }}>
                  <div className='card-body'>
                    {/* <h1 id='overview'>Familial Adenomatous Polyposis (F.A.P.)</h1> */}
                  
                  </div>
                </div>
              </div>
            </section>
            <section id='medcare' className='row'>
              <div className='col-12' style={{marginLeft:'4rem'}}>
                <h1 className='text-center text-danger'>Crohn.</h1>
                <div className='card text-light border-danger border-2' style={{ backgroundColor: '#151515' }}>
                  <div className='card-body'>
                    
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* <span>scroll up</span>
          <BackToTop /> */}
          {/* <div class='col-2' style={{marginLeft:'2rem'}}>
            <main>
              <div class='section-nav'>
                <ol
                  style={{
                    borderRadius: '1em',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '0'
                  }}
                >
                  <li>
                    <a href='#introduction'>F.A.P.</a>
                    <ul
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '0px !important'
                      }}
                    >
                      <li>
                        <a href='#overview'>Overview</a>
                      </li>
                      <li className="">
                        <a href='#symptoms'>Symptoms & Causes</a>
                      </li>
                      <li>
                        <a href='#fdiagnosis'>Diagnosis</a>
                      </li>
                      <li className="">
                        <a href='#ftreatment'>Treatment</a>
                      </li>
                      <li className="">
                        <a href='#coping'>Coping and support</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href='#Crohn'>Crohn</a>
                    <ul>
                      <li>
                        <a href='#over'>Overview</a>
                      </li>
                      <li>
                        <a href='#causes'>Causes</a>
                      </li>
                      <li className="">
                        <a href='#diagnosis'>Diagnosis</a>
                      </li>
                      <li className="">
                        <a href='#options'>Treatment</a>
                      </li>
                     
                      <li className="">
                        <a href='#quest'>Questionairie</a>
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </main>
          </div> */}
        </div>
      </div>

     
    </>
  );
};

export default Articles;
