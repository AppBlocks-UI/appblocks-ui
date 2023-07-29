import React from 'react'

import { 
    Avatar, 
    Box, 
    Flex, 
    Heading, 
    Text, 
    VStack
} from '@chakra-ui/react'

import {FiFile} from 'react-icons/fi'

export const FilesList = ({list}: any) => {
  return (
    <VStack gap={0} w="100%" justify='flex-start' pt={2}>
        {list.map((notification: any, key: number) => (
            <Flex key={`contact-${key}`} w="100%" alignItems="flex-start" justify="flex-start" py={1}>
                <Avatar
                    // name="Item"
                    bgColor="brand.secondary.kappa"
                    color="black.100"
                    // color={useColorModeValue("black.100", "gray.l80")}
                    size="xs"
                    mr={2}
                    borderRadius="lg"
                    icon={<FiFile fontSize='1rem' />}
                />
                <Box>
                    <Text textStyle="mid">{notification.name}</Text>
                    <Text textStyle="small">{notification.fileSize}MB / {notification.time} / {notification.owner}</Text>
                </Box>
            </Flex>
        ))}
    </VStack>
  )
}