const base = {
  fontSize: "14px",
  color: 'black.100',
  fontWeight: 'normal',
  _dark: {
    color: 'gray.l80',
  }
}

export const textStyles = {
  base: base,
  h1: {
    // you can also use responsive styles
    ...base,
    color: "black.100",
    fontSize: ["35px", "48px"],
    fontWeight: "semibold",
    lineHeight: "120%",
    letterSpacing: "-2%",
  },
  h2: {
    ...base,
    color: "black.100",
    fontSize: ["28px", "32px"],
    fontWeight: "semibold",
    lineHeight: "110%",
    letterSpacing: ".04rem",
  },
  h3: {
    ...base,
    color: "black.100",
    fontSize: "24px",
    fontWeight: "semibold",
    lineHeight: "110%",
    letterSpacing: ".04rem",
  },
  h5: {
    // ...base,
    color: "white.80",
    fontSize: ["20px", "18px"],
    fontWeight: "semibold",
    lineHeight: "140%",
    letterSpacing: ".02rem",
    _dark: {
      color: 'gray.l80',
    }
  },
  sectionSubHeading: {
    color: "brand.secondary.f",
    fontSize: "18px",
    textTransform: "uppercase",
    fontWeight: "semibold",
    lineHeight: "110%",
    letterSpacing: ".4rem",
  },
  featureContent: {
    color: "gray.80",
    fontSize: "18px",
    lineHeight: "140%",
    letterSpacing: ".053rem",
    _dark: {
      color: 'gray.l40'
    }
  },
  mid: {
    fontSize: "14px",
    color: "black.100",
    _dark: {
      color: 'gray.l40',
    }
  },
  small: {
    fontSize: "12px",
    color: "black.40",
    _dark: {
      color: 'gray.l40',
    }
  }
};