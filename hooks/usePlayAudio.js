// import packages below
import { useCallback } from 'react';

const usePlayAudio = () => {
  const playHandler = useCallback((key, volume = 0.1) => {
    const audio = document.getElementById(key);

    if (audio) {
      audio.currentTime = 0;
      audio.volume = volume;
      audio.play();
    }
  }, []);

  return { playHandler };
};

export default usePlayAudio;
