import { tableAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tableAnatomy.keys)

// define a custom variant
export const filled = definePartsStyle(() => {

  return {
    table: {
      bg: "white",
      rounded: "md",
      _dark: {
        bg: "gray.l5",
      }
    },
    thead: {
      color: "black.40",
      fontSize: "12px",
      bg: 'transparent',
      borderBottom: "1px solid",
      borderColor: "gray.20",
      _dark: {
        borderColor: "gray.l20",
      }
    },
    th: {
      fontSize: "sm",
      color: "black.40",
      textTransform: "sentencecase",
      fontWeight: "normal",
      letterSpacing: "normal",
      borderBottom: "1px solid",
      _hover: {
        bg: "none",
      },
      _dark: {
        color: 'gray.l40',
        borderColor: "gray.l10",

      }
    },
    tbody: {
      width: "100%",
    },
    tr: {
      width: "100%",
      // borderBottom: "1px solid", // just for landing page
      borderColor: "gray.5",
      _dark: {
        borderColor: 'gray.l10',
      },
      _hover: {
        bg: "brand.secondary.kappa",
        _dark: {
          bg: 'gray.l10',
        }
      }
    },
    td: {
      color: "black.100",
      fontSize: "14px",
      fontWeight: "normal",
      _dark: {
        color: 'gray.l80',
      }
    },
    tfoot: {},
  }
})

const variants = {
  filled,
}

export const tableTheme = defineMultiStyleConfig({ variants })
