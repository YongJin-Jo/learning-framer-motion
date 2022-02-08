import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Warrper } from '../asset/css/default.css';

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Circle = styled(motion.div)`
  width: 70px;
  height: 70px;
  background-color: rgba(126, 214, 223, 1);
  border-radius: 50px;
`;

const Container = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const FinalOne = () => {
  const [click, setClick] = useState(false);
  const onClick = () => {
    setClick(props => !props);
  };
  return (
    <Container onClick={onClick}>
      <Box>{click ? <Circle layoutId="circle" /> : null}</Box>
      <Box>{!click ? <Circle layoutId="circle" /> : null}</Box>
    </Container>
  );
};
