import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const brandPrimary = defineStyle({
  textDecoration: 'none',
  color: 'brand.secondary.f',
  fontWeight: 'medium',

  // let's also provide dark mode alternatives
  _dark: {
    color: 'brand.secondary.g',
  }
})

const outlineButton = defineStyle({
  textDecoration: 'none',
  color: 'black.100',
  fontWeight: 'medium',
  fontSize: '15px',
  border: '1px solid',
  borderColor: 'gray.10',
  rounded: 'md',
  px: 3,
  py: 1,

  _hover: {
    textDecoration: 'none',
    bg: 'gray.5',
  },

  // let's also provide dark mode alternatives
  _dark: {
    color: 'gray.l80',
    borderColor: 'gray.l20',
    _hover: {
      bg: 'gray.l10',
    },
  }
})



const navlink = defineStyle({
  textDecoration: 'none',
  color: 'gray.80',
  fontWeight: 'medium',
  fontSize: '15px',

  _hover: {
    textDecoration: 'none',
    color: 'black.100',
  },

  // let's also provide dark mode alternatives
  _dark: {
    color: 'gray.l40',
    _hover: {
      color: 'gray.l80',
    }
  }
})

export const linkTheme = defineStyleConfig({
  variants: { brandPrimary, outlineButton, navlink },
});