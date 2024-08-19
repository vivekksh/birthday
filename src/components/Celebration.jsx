import React from 'react';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';

const Celebration = () => {
  return (
    <div className="celebration-container">
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={500}
        gravity={0.1}
      />
      <motion.h1
        className="celebration-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Happy Birthday Swagata  &hearts;
      </motion.h1>
    </div>
  );
};

export default Celebration;
