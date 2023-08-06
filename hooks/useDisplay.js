// import packages below
import { useState, useEffect, useCallback } from 'react';

// import assets below
import { instruments } from '@/data/instruments';

const useDisplay = () => {
  const [display, setDisplay] = useState('');

  const displayHandler = useCallback((key) => {
    if (!key) return false;

    const selected = instruments.find((item) => item.id === key);

    if (selected) setDisplay(selected.instrument.toUpperCase());
  });

  useEffect(() => {
    const displayTimeout = setTimeout(() => setDisplay(''), 2000);

    return () => clearTimeout(displayTimeout);
  }, [display]);

  return { display, displayHandler };
};

export default useDisplay;
