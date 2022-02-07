import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { Warrper } from '../asset/css/default.css';

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 50px;
`;

const BoxVars = {
  drag: { backgroundColor: 'rgb(46, 204, 113)', transition: { duration: 1 } },
};

export const Drag = () => {
  return (
    <Warrper>
      <h1>Drag</h1>
      <Box drag variants={BoxVars} whileDrag="drag"></Box>
    </Warrper>
  );
};
