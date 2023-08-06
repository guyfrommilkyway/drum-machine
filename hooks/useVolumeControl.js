// import packages below
import { useState, useCallback } from 'react';

const useVolumeControl = () => {
  const [volume, setVolume] = useState(0);

  const volumeHandler = useCallback((num) => setVolume(num), []);

  return { volume, volumeHandler };
};

export default useVolumeControl;
