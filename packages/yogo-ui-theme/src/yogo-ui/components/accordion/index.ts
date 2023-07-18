import { accordionAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys)

const baseStyle = definePartsStyle({
  root: {},
  container: {
    border: 'none',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    w: "100%",
    py: 2,
    border: 'none',
    fontWeight: 'normal',
    rounded: 'md',

    _hover: {
        bg: 'gray.5',
        _dark: {
            bg: 'gray.l10',
        }
    },
    _pressed: {
        bg: 'gray.5'
    },
    _active: {
        bg: 'gray.5',
        fontWeight: 'semibold',
        _dark: {
            bg: 'gray.l10',
        }
    },
  },
  icon: {},
  panel: {
    w: "100%",
    p: 0,
    color: 'black.100'
  },
  
})

export const accordionTheme = defineMultiStyleConfig({ baseStyle })