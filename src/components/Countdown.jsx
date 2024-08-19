import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = ({ onCountdownComplete }) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const savedTime = localStorage.getItem('countdownTimeLeft');
    return savedTime !== null ? parseInt(savedTime, 10) : 5;
  });

  useEffect(() => {
    // Log current timeLeft and savedTime for debugging
    console.log('Current timeLeft:', timeLeft);

    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft((prevTime) => {
          const newTime = prevTime - 1;
          localStorage.setItem('countdownTimeLeft', newTime);
          return newTime;
        });
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      onCountdownComplete(); // Notify parent component when countdown completes
      localStorage.removeItem('countdownTimeLeft'); // Clean up local storage
    }
  }, [timeLeft, onCountdownComplete]);

  // If countdown has completed, return null
  if (timeLeft <= 0) {
    return null;
  }

  return (
    <div className="countdown-background">
      <div className="countdown">
        <h2>Countdown to the Celebration </h2>
        <div className="countdown-timer">
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft}</span>
            <span className="countdown-label">seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
