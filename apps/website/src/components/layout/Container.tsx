import { chakra, Flex, FlexProps, shouldForwardProp, Container as m } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

export const Container = (props: FlexProps) => {
  const { children } = props;

  return (
    <MotionDiv
      as={Flex}
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg="white"
      color="black.100"
      _dark={{
        bg: "black.100",
        color: "white",
      }}
      // px={[6, 4]}
      {...props}
    >
     {children}
    </MotionDiv>
  );
};
