export const Radiocard = {
  baseStyle: {
    // radio
    _checked:{
      bg: 'primary.700',
      color: 'white',
    },
    // card
    w: 'full',
    display: "flex",
    flexDirection: "column",
    background: "white",
    gap: 2,
  },
  // Two variants: rounded and smooth
  variants: {
    rounded: {
      px: 8,
      py: 4,
      borderRadius: "xl",
      boxShadow: "xl",
    },
    smooth: {
      px: 6,
      py: 4,
      borderRadius: "base",
      boxShadow: "md",
    },
  },
  // The default variant value
  defaultProps: {
    variant: "rounded",
  },
}