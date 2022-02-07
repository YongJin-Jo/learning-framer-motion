import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Drag } from './components/Drag';
import { Gestures } from './components/Gestures';
import { Variants } from './components/Variants';
import { Path } from './components/Path';
import { Presence } from './components/Presence';
import { Slider } from './components/Slider';
const MainWarrper = styled.div``;
const Flex = styled.div`
  display: flex;
`;
function App() {
  return (
    <MainWarrper className="App">
      <Flex>
        <Variants />
        <Gestures />
        <Drag />
        <Path />
      </Flex>
      <Flex>
        <Presence />
      </Flex>
      <Flex>
        <Slider />
      </Flex>
    </MainWarrper>
  );
}

export default App;
