// import packages below
import { useState, useCallback } from 'react';

const usePowerToggle = () => {
  const [power, setPower] = useState(true);

  const powerHandler = useCallback(() => setPower((prevState) => !prevState));

  return { power, powerHandler };
};

export default usePowerToggle;
