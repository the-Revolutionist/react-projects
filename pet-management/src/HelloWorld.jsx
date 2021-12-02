import { Box, Text, chakra } from '@chakra-ui/react';

import { useState } from 'react';

export const HelloWorld = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    if (isVisible) {
      setIsVisible(false);
    }
    if (!isVisible) {
      setIsVisible(true);
    }
    console.log(isVisible);
  };
  return (
    <div>
      <Box>
        {isVisible ? <Text>HElloWORLd</Text> : null}
        <chakra.button
          onClick={handleClick}
          width="100px"
          height="50px"
          bg="green.200"
          rounded="md"
          _hover={{ bg: 'green.300' }}
        >
          click me
        </chakra.button>
      </Box>
    </div>
  );
};
