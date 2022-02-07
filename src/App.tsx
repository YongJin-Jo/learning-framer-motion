import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Drag } from './components/Drag';
import { Gestures } from './components/Gestures';
import { Variants } from './components/Variants';

const MainWarrper = styled(motion.div)`
  display: flex;
`;

function App() {
  return (
    <MainWarrper className="App">
      <Variants />
      <Gestures />
      <Drag />
    </MainWarrper>
  );
}

export default App;
