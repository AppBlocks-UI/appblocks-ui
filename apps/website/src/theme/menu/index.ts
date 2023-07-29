import { menuAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys)

const baseStyle = definePartsStyle({
//   button: {
//     // this will style the MenuButton component
//   },
  list: {
    // this will style the MenuList component
    py: 2,
    px: 2,
    boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',
    borderRadius: 'md',
    border: 'none',
    bg: 'white',
    _dark: {
        bg: 'gray.l5',
    }
  },
  item: {
    // this will style the MenuItem and MenuItemOption components
    color: 'black.100',
    fontSize: '14px',
    rounded: 'md',
    _hover: {
      bg: 'black.5',
    },
    _focus: {
      bg: 'black.5',
      fontWeight: 'medium',
      rounded: 'md',
    },
    _dark: {
        color: 'gray.l80',
        bg: 'gray.l5',
        _hover: {
            bg: 'gray.l10',
        },
        _focus: {
            bg: 'black.l10',
          },
    }
  },
  groupTitle: {
    // this will style the text defined by the title prop
    // in the MenuGroup and MenuOptionGroup components
    color: 'black.80',
    letterSpacing: 'tight',
    fontSize: 'md',
    mx: 3,
    _dark: {
        color: 'gray.l40'
    }
  },
  command: {
    // this will style the text defined by the command
    // prop in the MenuItem and MenuItemOption components
    opacity: '0.8',
    fontFamily: 'mono',
    fontSize: 'sm',
    letterSpacing: 'tighter',
    ml: 2,
  },
  divider: {
    // this will style the MenuDivider component
    my: 3,
    borderColor: 'black.5',
    _dark: {
        borderColor: 'gray.l10',
    },
  },
})
// export the base styles in the component theme
export const menuTheme = defineMultiStyleConfig({ baseStyle })