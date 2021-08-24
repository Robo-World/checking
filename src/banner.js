import React from 'react'
import './App.css';
import off from './offer.jpg'
import vid from './intro.mp4'

function Banner() {
   
    return(
        <div id="banner">
        <div className="rc">
        </div>
        <div className="div">
        <p>
        <p>-----------------------</p>
        <p id="change">WELCOME TO THE WORLD OF FUTURE<br/>ROBO WORLD</p>
        <p>-----------------------</p>
        </p></div>
        <img src={off} id="off"/>
        <div>
                <p>
                <video height="500" controls>
  <source src={vid} type="video/mp4"/>

     </video>
                </p></div>
       </div>
    )
}

export default Banner;