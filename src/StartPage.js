import React from "react";
// import Background from "./images/bg.png";
import monkey from "./images/monkey.png";

const StartPage = ({ username, onLogout,setCurrentPage }) => {
  const handleStartGame = () => {
    setCurrentPage('/info');
  };

  return (
    <div className="page-container">
      <h1>Welcome {username} to the Matching Game!</h1>
      <img src={monkey} alt="Monkey" className="monkey" />
      <div className="btn-container">
        <button onClick={handleStartGame} className="btn">
          Start Game
        </button>
        <button onClick={onLogout} className="btn">
          Logout
        </button>
      </div>
    </div>
  );
};

export default StartPage;
