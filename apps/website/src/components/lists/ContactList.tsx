import React from 'react'

import { 
    Avatar, 
    Box, 
    Flex, 
    Heading, 
    Text, 
    VStack
} from '@chakra-ui/react'

export const ContactList = ({list}: any) => {
  return (
    <VStack gap={0} justify='flex-start' pt={2} w="100%">
        {list.map((listItem: any, key: number) => (
            <Flex key={`contact-${key}`} alignItems="flex-start" justify="flex-start" py={1} w="100%">
                <Avatar
                    name={listItem.title}
                    bgColor="brand.secondary.kappa"
                    color="black.100"
                    // color={useColorModeValue("black.100", "gray.l80")}
                    size="xs"
                    mr={2}
                    src={listItem.photo}
                    // icon={<listItem.icon fontSize='1rem' />}
                />
                <Box>
                    <Text textStyle="mid">{listItem.title}</Text>
                </Box>
            </Flex>
        ))}
    </VStack>
  )
}