import { Box, BoxProps, Text } from '@chakra-ui/react'

export default function TocNav({ children, title, ...rest }: BoxProps) {
  return (
    <Box
      as='nav'
      aria-labelledby='toc-title'
      width='16rem'
      flexShrink={0}
      display={{ base: 'none', xl: 'block' }}
      position='sticky'
      py='10'
      pr='4'
      top='6rem'
      right='0'
      fontSize='md'
      alignSelf='start'
      maxHeight='calc(100vh - 8rem)'
      overflowY='auto'
      sx={{ overscrollBehavior: 'contain' }}
      {...rest}
    >
      {title && (
        <Text
          as='h2'
          textStyle="h5"
          textTransform="capitalize"
          id='toc-title'
        >
          {title}
        </Text>
      )}
      {children}
    </Box>
  )
}
