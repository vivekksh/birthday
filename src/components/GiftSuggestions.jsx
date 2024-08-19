import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import './GiftSuggestions.css';

const GiftSuggestions = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showGift, setShowGift] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleRevealClick = () => {
    setShowConfetti(true);
    setShowGift(true);
  };

  return (
    <div className="gift-suggestions-container">
      {showConfetti && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          numberOfPieces={500}
          gravity={0.1}
          colors={['#FF4500', '#FFD700', '#FF69B4', '#8B008B', '#4B0082']}
        />
      )}
      {!showGift ? (
        <div className="teaser-section">
          <h2>Ready for a Surprise?</h2>
          <p>Click the button below to reveal your special gift!</p>
          <button className="reveal-button" onClick={handleRevealClick}>
            Reveal My Gift
          </button>
        </div>
      ) : (
        <div className="surprise-gift-section">
          <h2>Your Surprise Gift!</h2>
          <img src="https://res.cloudinary.com/dprjiwgfo/image/upload/v1724001613/bdqh7fzetly7mxjwssp3.jpg" alt="Surprise Gift" />
          <p>Congratulations! A Vacation to Paris !</p>
        </div>
      )}
    </div>
  );
};

export default GiftSuggestions;
