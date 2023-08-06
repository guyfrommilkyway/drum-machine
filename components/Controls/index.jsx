// import packages below
import { useContext } from 'react';
import { Flex, Switch } from '@chakra-ui/react';

// import utils below
import { MachineContext } from '@/store/machine-context';

const Controls = () => {
  const { power, powerHandler } = useContext(MachineContext);

  return (
    <Flex justify='flex-start' width='100%' maxWidth={80} my={4}>
      <Switch size='md' isChecked={power} onChange={powerHandler} />
    </Flex>
  );
};

export default Controls;
