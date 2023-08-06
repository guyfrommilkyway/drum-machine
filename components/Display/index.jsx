//
import { Box } from '@chakra-ui/react';

// import packages below
import { useContext } from 'react';

// import utils below
import { MachineContext } from '@/store/machine-context';

const Display = () => {
  const { power, display } = useContext(MachineContext);

  return (
    <Box
      id='display'
      w='100%'
      maxWidth={80}
      h='fit-content'
      minH={14}
      padding={4}
      color={power ? '#42494C' : '#B3B6B7'}
      textAlign='center'
      borderRadius={6}
      backgroundColor={power ? '#EDF2F7' : '#F8FAFC'}
    >
      {power ? display : 'OFF'}
    </Box>
  );
};

export default Display;
