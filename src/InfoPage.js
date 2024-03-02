import React from 'react';
// import monkeyImage from './monkey.jpg';
import whiteRect from "./images/white-react.png"
import blueCard from "./images/blue_card.png"
import pinkCard from "./images/rotate-pink.png"

const InfoPage = ({ username, onLogout }) => {
  const handleNext = () => {
    window.location.href = '/game';
  };

  return (
    <div className="page-container">
      {/* <h2>Instructions:</h2>
      <p>Match the fruit images with their corresponding initial letter images.</p> */}
      {/* <img src={monkeyImage} alt="Monkey" className="monkey-image" /> */}

      <div className='infoCard-conatainer'>
      <img src={whiteRect} alt='white-cont'/>
        <div className='first-cont'>
           <img className='blue-card' src={blueCard} alt='blue-card'/>
           <img  className="pink-card" src={pinkCard} alt='pink-card'/>
           <h3>Select a Pink Card</h3>
        </div>
        <img src={whiteRect} alt='white-cont'/>
        <img src={whiteRect} alt='white-cont'/>
      </div>  
      <button onClick={handleNext} className="btn">Next</button>
      <button onClick={onLogout} className="btn">Logout</button>
    </div>
  );
};

export default InfoPage;
