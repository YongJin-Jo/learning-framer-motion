import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Warrper } from '../asset/css/default.css';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vh;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  height: 200px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
`;

const overlay = {
  hidden: { backgroundColor: 'rgba(0, 0, 0, 0)' },
  visible: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  exit: { backgroundColor: 'rgba(0, 0, 0, 0)' },
};

export const Modal = () => {
  const [boxNumber, setBoxNumber] = useState<null | string>(null);

  return (
    <Warrper>
      <h1>Modal</h1>
      <Grid>
        {['1', '2', '3', '4'].map(n => (
          <Box onClick={() => setBoxNumber(n)} key={n} layoutId={n} />
        ))}
      </Grid>
      <AnimatePresence>
        {boxNumber && (
          <Overlay
            onClick={() => setBoxNumber(null)}
            variants={overlay}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box layoutId={boxNumber} style={{ width: 400, height: 200 }} />
          </Overlay>
        )}
      </AnimatePresence>
    </Warrper>
  );
};
