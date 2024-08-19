// src/pages/Wishes.jsx

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Wishes.css';

const Wishes = () => {
  const [wishes] = useState([
    { name: 'Alice', message: 'Happy Birthday! Wishing you a day filled with love and joy.' },
    { name: 'Bob', message: 'May your birthday be as amazing as you are! Cheers!' },
    { name: 'Charlie', message: 'Hope your special day brings you everything you’ve been wishing for.' },
    { name: 'David', message: 'Sending you warmest wishes on your special day! Have a blast!' },
    { name: 'Emma', message: 'Happy Birthday! May your day be full of laughter and joy.' },
    { name: 'Frank', message: 'Wishing you all the happiness in the world on your birthday!' },
    { name: 'Grace', message: 'May your birthday be as wonderful as you are!' },
    { name: 'Hannah', message: 'Cheers to another year of happiness and health. Happy Birthday!' },
    // Add more wishes here
  ]);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <div className="wishes-container">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="wishes-title"
      >
        Birthday Wishes
      </motion.h1>
      <motion.div
        style={{ y }}
        className="wishes-list"
      >
        {wishes.map((wish, index) => (
          <motion.div
            key={index}
            className="wish-card"
            initial={{ opacity: 0, x: index % 2 === 0 ? '-100%' : '100%' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.2, ease: 'easeOut' }}
          >
            <motion.h3
              className="wish-name"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {wish.name}
            </motion.h3>
            <motion.p
              className="wish-message"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {wish.message}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Wishes;
