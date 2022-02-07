import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { Warrper } from '../asset/css/default.css';

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
`;

const BoxVars = {
  hover: { scale: 1.5, rotateZ: 180 },
  click: { scale: 1, borderRadius: '50px' },
};

export const Gestures = () => {
  return (
    <Warrper>
      <h1>Gestures</h1>
      <Box variants={BoxVars} whileHover="hover" whileTap="click" />
    </Warrper>
  );
};
