// import packages below
import { useCallback, useContext } from 'react';
import { Button } from '@chakra-ui/react';

// import utils below
import { MachineContext } from '@/store/machine-context';

const DrumPad = (props) => {
  const { id, instrument, audio } = props;

  const { power, displayHandler, playHandler } = useContext(MachineContext);

  const clickHandler = useCallback((key) => {
    playHandler(key);
    displayHandler(key);
  }, []);

  return (
    <Button
      className='drum-pad'
      id={instrument}
      width={24}
      height={24}
      color='#42494C'
      isDisabled={!power}
      onClick={() => clickHandler(id)}
    >
      {id}
      <audio className='clip' id={id} preload='auto' src={audio}></audio>
    </Button>
  );
};

export default DrumPad;
