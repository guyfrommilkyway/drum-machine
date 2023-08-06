// import packages below
import { Flex } from '@chakra-ui/react';

// import components below
import DrumPad from '@/components/DrumPad';

// import assets below
import { instruments } from '@/data/instruments';

const Instruments = (props) => {
  const { displayHandler } = props;

  return (
    <Flex wrap='wrap' gap={4} width={80}>
      {instruments.map((item) => {
        return (
          <DrumPad key={item.id} displayHandler={displayHandler} {...item} />
        );
      })}
    </Flex>
  );
};

export default Instruments;
