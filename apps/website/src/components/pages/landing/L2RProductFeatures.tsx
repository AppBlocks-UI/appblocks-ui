import React from 'react'
import {
    Box,
    VStack,
    Text,
    Stack,
    Flex,
    Image,
} from "@chakra-ui/react";

export const L2RProductFeatures = ({productDescription1, productDescription2}: any) => {
  return (
    <>
        <VStack align="flex-start" spacing={12} w="" h="fit-content">
            <Text
              as="h3"
              textStyle="sectionSubHeading"
              align="start"
              pl={"12rem"}
            >
              What is AppBlocks?
            </Text>
            <Stack spacing={4} direction="column">
              <Flex h="640px" mt={8} position="relative">
                <Box w="50%" mr={4} pl={"12rem"} mt={8}>
                  <Text textStyle="h1" mb={4}>
                    {productDescription1.heading}
                  </Text>
                  <Text textStyle="featureContent">
                    {productDescription1.description}
                  </Text>
                </Box>
                <Box w="50%" position="absolute" top="" right="-10%">
                  <Image
                    src={productDescription1.image}
                    alt="AppBlocks features"
                    roundedLeft="lg"
                    h="600px"
                    objectFit="cover"
                    objectPosition="top left"
                    position="relative"
                    right={0}
                  />
                </Box>
              </Flex>
              <Flex
                h="620px"
                position="relative"
                flexDirection="row-reverse"
                mt={40}
              >
                <Box w="50%" ml={4} mt={8} pr={"12rem"}>
                  <Text textStyle="h1" mb={4}>
                    {productDescription2.heading}
                  </Text>
                  <Text textStyle="featureContent">
                    {productDescription2.description}
                  </Text>
                </Box>
                <Box w="50%" position="absolute" h="600px" left="-5%">
                  <Image
                    src={productDescription2.image}
                    alt="AppBlocks features"
                    roundedRight="lg"
                    h="600px"
                    objectFit="cover"
                    objectPosition="top right"
                    position="relative"
                  />
                </Box>
              </Flex>
            </Stack>
          </VStack>
    </>
  )
}