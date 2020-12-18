//@flow
import React, { useState } from 'react';
import './index.css';
import Navbar from './component/Navbar';
import Contact from './component/Contact';
import ImageSlider from './component/ImageSlider';
import Back from './component/Back';
import Popup from './component/Popup';
import Anothernon from './component/Anothernon';
import AnotherBut from './component/AnotherBut';
import ImageSlide from './component/ImageSlide';
import TheButton from './component/TheButton';
import NonactiveBut from './component/NonactiveBut';
import catdog from './assets/Cat-N-Dog-Logo.png';
import googlep from './assets/google-play-badge.png';
import appleicon from './assets/AppStoreBadge.png';
import fbi from './assets/FB-icon-black.png';
import linkedin from './assets/linkedin-icon-black.png';
import twitter from './assets/Twitter-icon-black.png';
import TextFirst from './component/TextFirst';
import TextSecond from './component/TextSecond';
import TextThird from './component/TextThird';
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [nowshow,setnowshow]=useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const nowshowing=()=>{
    setnowshow(true);
  }
  const nowwhat=()=>{
    setnowshow(false);
  }
  console.log(nowshow);
  return (
    <div className="App">
      {isOpen && <Popup
      handleClose={togglePopup}
    />}
    {isOpen && <Back/>
    }
      <div >
      <div className="cont"><img src={catdog}/>
      <TextFirst/>
      <TextSecond/>
      <img className="apple" src={appleicon}/>
      <img  className="google" src={googlep}/>
      <img className="fb" src={fbi}/>
      <img className="lik" src={linkedin}/>
      <img className="twi" src={twitter} />
      </div>
        {nowshow && <ImageSlider />}
        {!nowshow && <ImageSlide/>}
        {!nowshow && <TheButton addTrip={nowwhat}/>}
        {!nowshow && <NonactiveBut addTrip={nowshowing}/>}
        {nowshow && <Anothernon addTrip={nowwhat}/>}
        {nowshow && <AnotherBut addTrip={nowshowing}/>}
      <div className="typetext">Type Text</div>
      <TextThird/>
      <div className="rt">
      <Navbar className="rt"/>
      <Contact className="rt" addTrip={togglePopup}/>
      </div>
      </div>
    </div>
  );
}

export default App;
