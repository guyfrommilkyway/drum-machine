// import packages below
import { createContext } from 'react';

// import utils below
import usePowerToggle from '@/hooks/usePowerToggle';
import useVolumeControl from '@/hooks/useVolumeControl';
import useDisplay from '@/hooks/useDisplay';
import usePlayAudio from '@/hooks/usePlayAudio';

const MachineContext = createContext({});

const MachineContextProvider = (props) => {
  const { children } = props;

  // state
  const { power, powerHandler } = usePowerToggle();
  const { volume, volumeHandler } = useVolumeControl();
  const { display, displayHandler } = useDisplay();
  const { playHandler } = usePlayAudio();

  const contextValue = {
    power,
    volume,
    display,
    powerHandler,
    volumeHandler,
    displayHandler,
    playHandler,
  };

  return (
    <MachineContext.Provider value={contextValue}>
      {children}
    </MachineContext.Provider>
  );
};

export { MachineContext, MachineContextProvider };
