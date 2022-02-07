import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
import React, { useRef } from 'react';
import styled from 'styled-components';
import { Warrper } from '../asset/css/default.css';

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 50px;
  cursor: pointer;
`;

const BiggerBox = styled(motion.div)`
  flex-direction: column;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const BoxVars = {
  drag: { backgroundColor: 'rgb(46, 204, 113)', transition: { duration: 1 } },
};

export const Drag = () => {
  const x = useMotionValue(0);
  const boxRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [1, 5], [1, 5]);
  return (
    <Warrper>
      <BiggerBox ref={boxRef}>
        <h1>Drag</h1>
        <Box
          style={{ x, scale }}
          drag
          dragConstraints={boxRef}
          variants={BoxVars}
          whileDrag="drag"
        ></Box>
      </BiggerBox>
    </Warrper>
  );
};
