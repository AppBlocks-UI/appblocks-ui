import { Flex, FlexProps } from '@chakra-ui/react'

export const Container = (props: FlexProps) => (
  <Flex
    direction="column"
    alignItems="center"
    justifyContent="flex-start"
    bg="white"
    color="black.100"
    _dark={{
      bg: 'black.100',
      color: 'white',
    }}
    transition="all 0.15s ease-out"
    px={[6, 0]}
    {...props}
  />
)
