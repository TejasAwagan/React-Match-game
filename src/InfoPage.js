import React from "react";
import whiteRect from "./images/white-react.png";
import blueCard from "./images/blue_card.png";
import pinkCard from "./images/rotate-pink.png";
import comboCards from "./images/combo-cards.png";

const InfoPage = ({ username, onLogout, setCurrentPage }) => {
  const handleNext = () => {
    setCurrentPage('/game');
  };

  return (
    <div className="page-container">
      <div className="infoCard-conatainer">
        <img src={whiteRect} alt="white-cont" />
        <div className="first-cont">
          <img className="blue-card" src={blueCard} alt="blue-card" />
          <img className="pink-card" src={pinkCard} alt="pink-card" />
          <div className="text">
            <h3>Select a Pink Card</h3>
            
          </div>
        </div>

        <img src={whiteRect} alt="white-cont" />
        <div className="second-cont">
          <img className="blue-card" src={blueCard} alt="blue-card" />
          <div className="text2">
            <h3>Select a Second Card</h3>
          </div>
        </div>

        <img src={whiteRect} alt="white-cont" />

        <div className="third-cont">
          <img className="comboCards" src={comboCards} alt="blue-card" />
          <div className="text3">
            <p>If they're same </p>
            <h3>Its a Match !</h3>
            <p>otherwise retry 😓</p>
          </div>
        </div>
        <div></div>
      </div>

      <button onClick={handleNext} className="btn">
        Next
      </button>
      <button onClick={onLogout} className="btn">
        Logout
      </button>
    </div>
  );
};

export default InfoPage;
