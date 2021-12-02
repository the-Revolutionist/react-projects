import {
  Box,
  ChakraProvider,
  Grid,
  Link,
  Text,
  VStack,
  chakra,
  extendTheme,
  theme,
} from '@chakra-ui/react';

import { PetManager } from './PetManager';
import React from 'react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" overflow="hidden">
        <VStack>
          <PetManager />
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
