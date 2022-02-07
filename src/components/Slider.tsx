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
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
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

const BoxVars = {
  initial: { x: -500, scale: 0.5 },
  animate: { x: -500, scale: 1 },
  exit: { x: 500, scale: 0.5 },
};

export const Slider = () => {
  const [slider, setSlider] = useState(1);
  const onClick = () => {
    const next = slider + 1;
    setSlider(next);
  };
  return (
    <Warrper>
      <Container>
        <AnimatePresence>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i =>
            i === slider ? (
              <Box
                variants={BoxVars}
                initial="invisible"
                animate="visible"
                exit="exit"
                key={i}
              >
                <span>{i}</span>
              </Box>
            ) : null
          )}
        </AnimatePresence>
        <div>
          <button>prev</button>
          <button onClick={onClick}>next</button>
        </div>
      </Container>
    </Warrper>
  );
};
