import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { Warrper } from '../asset/css/default.css';

const Box = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 15px;
  width: 200px;
  height: 200px;
  border: 1px solid white;
  background-color: sky;
`;

const Circle = styled(motion.div)`
  width: 70px;
  height: 70px;
  background-color: white;
  place-self: center;
  border-radius: 50px;
`;

const myVaras = {
  start: { scale: 0.5, opacity: 0 },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      dely: 0.5,
      duration: 0.5,
      bounce: 0.8,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const circleVaras = {
  start: { opacity: 0, y: 10 },
  end: { opacity: 1, y: 0 },
};

export const Variants = () => {
  return (
    <Warrper>
      <h1>Variants</h1>
      <Box variants={myVaras} initial="start" animate="end">
        <Circle variants={circleVaras} />
        <Circle variants={circleVaras} />
        <Circle variants={circleVaras} />
        <Circle variants={circleVaras} />
      </Box>
    </Warrper>
  );
};
