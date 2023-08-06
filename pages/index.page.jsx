// import packages below
import { useEffect, useCallback, useContext } from 'react';
import { Heading } from '@chakra-ui/react';

// import components below
import Display from '@/components/Display';
import Controls from '@/components/Controls';
import Instruments from '@/components/Instruments';

// import utils below
import { MachineContext } from '@/store/machine-context';

const Home = () => {
  const { power, displayHandler, playHandler } = useContext(MachineContext);

  // keypress handler
  const keyPressHandler = useCallback(
    (event) => {
      // error handling
      if (!event.key || !power) return false;

      const key = event.key.toUpperCase();

      displayHandler(key);
      playHandler(key);
    },
    [power]
  );

  useEffect(() => {
    document.addEventListener('keypress', keyPressHandler);

    return () => document.removeEventListener('keypress', keyPressHandler);
  }, [power]);

  return (
    <div id='drum-machine'>
      <Heading as='h4' mb={4} fontSize='md' textTransform='uppercase'>
        Drum Machine
      </Heading>
      <Display />
      <Controls />
      <Instruments />
    </div>
  );
};

export default Home;
