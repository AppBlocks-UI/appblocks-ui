import { avatarAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(avatarAnatomy.keys)

const roundedSquare = definePartsStyle({
  badge: {
    bg: "gray.500",
    border: "2px solid",
  },
  container: {
    bg: "brand.secondary.kappa",
    borderRadius: "lg",
    color: "black.100",
  },
  excessLabel: {

    _dark: {
    }
  }
})

export const avatarTheme = defineMultiStyleConfig({
  variants: { roundedSquare },
})