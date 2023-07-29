import React from 'react'

import { Flex, Text } from '@chakra-ui/react'

export const LandingFooter = () => {
  const latestYear = new Date().getFullYear()
  return (
    <Flex
      w="100%"
      py={8}
      justify="center"
      bg="white"
      color="black.100"
      _dark={{
        bg: "black.100",
        color: "white",
      }}
    >
      <Text textStyle="small">&copy; {latestYear} AppBlocks</Text>
    </Flex>
  );
}