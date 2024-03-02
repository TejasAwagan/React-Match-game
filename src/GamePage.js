import React, { useState, useEffect } from 'react';
import PinkCard from './images/pink_card.png'; // Import card image for fruit
import BlueCard from './images/blue_card.png'; // Import card image for fruit

const GamePage = ({ username, onLogout }) => {
  const fruits = ['Apple', 'Banana', 'Cherry', 'Grape', 'Lemon', 'Orange',];
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    const initialCards = fruits.concat(fruits).map((fruit, index) => ({
      id: index,
      type: fruit,
      flipped: false,
      matched: false
    }));
    setCards(shuffleCards(initialCards));
  }, []);

  const shuffleCards = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleCardClick = (id) => {
    const clickedCard = cards.find(card => card.id === id);
    if (!clickedCard || flippedCards.length === 2 || matchedCards.includes(id)) return;

    const updatedCards = cards.map(card =>
      card.id === id ? { ...card, flipped: true } : card
    );
    setCards(updatedCards);
    setFlippedCards([...flippedCards, id]);

    if (flippedCards.length === 1) {
      const firstCard = cards.find(card => card.id === flippedCards[0]);
      if (firstCard && firstCard?.type === clickedCard?.type) {
        setMatchedCards([...matchedCards, id, flippedCards[0]]);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          const unmatchedCards = cards.map(card =>
            card.flipped && !matchedCards.includes(card.id) ? { ...card, flipped: false } : card
          );
          setCards(unmatchedCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="page-container">
      <h2>Matching Game</h2>
      <h1>{username}!</h1>
      <button onClick={onLogout} className="btn">Logout</button>
      <div className="card-container">
      {cards.map(card => (
  <div
    key={card.id}
    className={`card ${card.flipped || matchedCards.includes(card.id) ? 'flipped' : ''}`}
    onClick={() => handleCardClick(card.id)}
  >
    <div className="card-inner">
      <div className="card-front">
        <img src={PinkCard} alt={card?.type} className="fruit-image" />
        </div>
      <div className="card-back">
        <img src={BlueCard} alt={card?.type} className="fruit-image" />
        <div className={`fruit-name`}>
          {card?.type}
        </div>
      </div>
    </div>
  </div>
))}

      </div>
    </div>
  );
};

export default GamePage;
