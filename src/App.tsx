import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Warrper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled(motion.div)`
  width: 100px;
  height: 100px;

  background-color: white;
`;

const myVaras = {
  start: { scale: 0 },
  end: {
    scale: 1,
    borderRadius: '20px',
    rotateZ: 360,
    transition: { type: 'spring', dely: 0.5 },
  },
};

function App() {
  return (
    <Warrper className="App">
      <Box variants={myVaras} initial="start" animate="end"></Box>
    </Warrper>
  );
}

export default App;
