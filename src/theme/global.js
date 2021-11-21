import { mode } from '@chakra-ui/theme-tools'

export const styles = {
  global: (props) => ({
    body: {
      bg: mode('gray.50', 'gray.800')(props),
    },
  }),
}
