import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Warrper } from '../asset/css/default.css';

const Box = styled(motion.div)`
  background-color: white;
  width: 200px;
  height: 100px;
  margin: 10px;
  border-radius: 15px;
`;

export const Presence = () => {
  const [toggle, setToggle] = useState(false);
  const toggleVars = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1, rotateZ: 360 },
    exit: { opacity: 0, scale: 0, y: 10 },
  };
  const onToggle = () => {
    setToggle(prev => !prev);
  };
  return (
    <Warrper>
      <h1>AnimatePresence </h1>
      <AnimatePresence>
        {toggle && (
          <Box
            variants={toggleVars}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        )}
      </AnimatePresence>
      <button onClick={onToggle}>toggle</button>
    </Warrper>
  );
};
