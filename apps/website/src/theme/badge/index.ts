import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const base = defineStyle({
  bg: 'brand.secondary.kappa',
  color: 'black.40',
  fontWeight: 'normal',
  textTransform: 'normal',
  rounded: 'sm',

  // let's also provide dark mode alternatives
  _dark: {
    bg: 'brand.secondary.g',
    color: 'black.80',
  }
})

export const badgeTheme = defineStyleConfig({
  variants: { base }
})