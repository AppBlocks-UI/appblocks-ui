import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'
import { appPageAnatomy } from '../../anatomy'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(appPageAnatomy.keys)

const baseStyle = definePartsStyle({
  container: {},
  inner: {},
  main: {},
})

export const appPageTheme = defineMultiStyleConfig({
  defaultProps: {
    variant: 'fullscreen',
  },
  variants: {
    static: {},
    fullscreen: {
      container: {
        position: 'absolute',
        inset: 0,
      },
    },
  },
  baseStyle,
})
