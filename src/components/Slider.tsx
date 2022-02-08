import { AnimatePresence, motion } from 'framer-motion';
import { Item } from 'framer-motion/types/components/Reorder/Item';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Flex, Warrper } from '../asset/css/default.css';

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  font-size: 28px;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  position: absolute;
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Vars = {
  entiry: (changeVars: boolean) => ({
    x: changeVars ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: (changeVars: boolean) => ({
    x: changeVars ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: { duration: 1 },
  }),
};

export const Slider = () => {
  const [slider, setSlider] = useState(1);
  const [changeVars, setchangeVars] = useState(false);
  const onNext = () => {
    setchangeVars(false);
    setSlider(value => (value === 10 ? 10 : value + 1));
  };
  const onPrev = () => {
    setchangeVars(true);
    setSlider(value => (value === 1 ? 1 : value - 1));
  };
  return (
    <Warrper>
      <h1>Slider</h1>
      <Container>
        <AnimatePresence custom={changeVars}>
          <Box
            custom={changeVars}
            variants={Vars}
            initial="entiry"
            animate="visible"
            exit="exit"
            transition={{ duration: 1 }}
            key={slider}
          >
            <span>{slider}</span>
          </Box>
        </AnimatePresence>
        <div>
          <button onClick={onPrev}>prev</button>
          <button onClick={onNext}>next</button>
        </div>
      </Container>
    </Warrper>
  );
};
