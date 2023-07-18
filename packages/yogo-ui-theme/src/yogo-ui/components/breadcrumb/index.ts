import { breadcrumbAnatomy as parts } from "@chakra-ui/anatomy"
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system"

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyleLink = defineStyle({
  px: 2,
  py: 1,
  color: "black.40",
  rounded: "md",

  _activeLink: {
    color: "gray.100",
  },

  _hover: {
    textDecoration: "none",
    bg: "gray.5",
  },

  _dark: {
    color: "white.l40",

    _activeLink: {
      color: "white.100",
    },

    _hover: {
      bg: "gray.l5",
    },
  },
});

const baseStyleSeparator = defineStyle({
  color: "black.40",
})

const baseStyle = definePartsStyle({
  link: baseStyleLink,
  separator: baseStyleSeparator,
})

export const breadcrumbTheme = defineMultiStyleConfig({
  baseStyle,
})