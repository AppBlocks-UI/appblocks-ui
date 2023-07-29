import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
  lineHeight: "1.2",
  borderRadius: "md",
  fontSize: "14px",
  fontWeight: "normal",
  transitionProperty: "common",
  transitionDuration: "normal",
  alignItems: 'center',
  _focusVisible: {
    boxShadow: "outline",
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none",
  },
  _hover: {
    _disabled: {
      bg: "initial",
    },
  },
})

const baseIconButton = defineStyle({
  rounded: "full",
  h: "40px",
  w: "40px",
  transition: "transform 0.15s ease-out, background 0.15s ease-out",
  bg: "white",
  color: "black.100",
  _hover: {
    bg: "gray.5",
    cursor: "pointer",
  },
  _dark: {
    bg: "black.100",
    color: "white.100",
    _hover: {
      bg: "gray.l10",
      cursor: "pointer",
    },
  },
});


const solid = defineStyle({
  background: 'brand.primary.alpha',
  color: 'white',
  rounded: 'md',
  border: 'none',
  alignItems: 'center',

  _hover: {
    background: 'brand.primary.80',
  },

  _dark: {
    background: 'brand.secondary.g',
    color: 'black.100',
    border: 'none',

    _hover: {
      background: 'brand.secondary.f',
    },
  }
})

const customOutline = defineStyle({
  background: 'white',
  color: 'black.100',
  rounded: 'md',
  border: '1px solid',
  borderColor: 'gray.10',
  fontSize: '13px',
  py: 2,

  _hover: {
    background: 'brand.primary.5',
  },

  _dark: {
    background: 'gray.l5',
    color: 'gray.l80',
    borderColor: 'gray.l20',

    _hover: {
      background: 'gray.l20',
    },
  }
})

const brandSolid = defineStyle({
  background: 'brand.primary.alpha',
  color: 'black.100',
  rounded: 'md',
  border: '1px solid',
  borderColor: 'gray.10',
  fontSize: '13px',
  py: 2,

  _hover: {
    background: 'brand.primary.5',
  },

  _dark: {
    background: 'brand.primary.80',
    color: 'red',
    borderColor: 'gray.l20',

    _hover: {
      background: 'gray.l20',
    },
  }
})

export const buttonTheme = defineStyleConfig({
  baseStyle,
  variants: { 
    baseIconButton, 
    solid,
    customOutline,
    brandSolid,
   },
});
