import { tabsAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys)

// define a custom variant
export const base = definePartsStyle((props) => {

  return {
    tab: {
      color: "gray.40",
      fontSize: "15px",
      _selected: {
        color: "black.100",
        borderBottom: '3px solid',
        borderBottomColor: "brand.primary.alpha",
        px: '1px',
        mx: '15px',
        fontWeight: 'semibold',
      },
      _dark: {
        color: "gray.l40",
        _selected: {
          color: "brand.secondary.g",
          borderBottomColor: "brand.secondary.g",
          px: '1px',
          fontWeight: 'semibold'
        },
      }
    },
    tablist: {
      flex: 1,
      overflowX: "auto",
      "-webkit-overflow-scrolling": "touch",
    },
    tabpanel: {
      width: "100%",
      px:0,
    },
  }
})

const variants = {
    base: base,
}

export const tabsTheme = defineMultiStyleConfig({ variants })
