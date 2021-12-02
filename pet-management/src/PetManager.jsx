import { Box, Center, HStack, Text, VStack } from '@chakra-ui/layout';

import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Select } from '@chakra-ui/select';

const entry = {
  activity: '',
  ' note': '',
};
export const PetManager = () => {
  return (
    <>
      <Center bg="wheat" width="100vw" height="100vh" overflow="hidden">
        <VStack bg="green.600" width="500px" height="800px">
          <Box height="250px" width="250px"></Box>
          <Select width="50%" placeholder="Choose Activity">
            <option value="Meal">Meal</option>
            <option value="Medicine">Medicine</option>
            <option value="Misc">Misc</option>
          </Select>
          <Input placeholder="Add Note" width="75%" />
          <HStack>
            <Button>Add</Button>
            <Button>Clear</Button>
          </HStack>

          <Box bg="wheat">
            <VStack></VStack>
          </Box>
        </VStack>
      </Center>
    </>
  );
};
