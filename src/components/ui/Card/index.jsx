import { Box, useStyleConfig } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/color-mode'

export const Card = ({ variant, children, ...rest }) => {
  const styles = useStyleConfig('Card', { variant })
  const bg = useColorModeValue('gray.50', 'whiteAlpha.50')

  return (
    <>
      <Box __css={styles} bg={bg} {...rest}>
        {children}
      </Box>
    </>
  )
}
