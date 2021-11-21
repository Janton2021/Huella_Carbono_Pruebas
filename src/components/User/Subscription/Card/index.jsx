// components
import { Box, Text, Badge } from '@chakra-ui/react'
// hooks
import { useStyleConfig } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { useRadio } from '@chakra-ui/radio'
// data
import { subsOptions } from 'assets/data'
import { user } from 'assets/data'

export function RadioCard(props) {

  // styling
  const styles = useStyleConfig('Radiocard', { props })
  const bg = useColorModeValue('gray.50', 'whiteAlpha.50')
  // radio
  const { getInputProps, getCheckboxProps } = useRadio(props)
  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label" w="full">
      <input {...input} />
      <Box {...checkbox} __css={styles} bg={bg}>
        {
          user.plan === props.children && <Badge colorScheme='secondary'> Current plan </Badge>
        }
        <Text size="sm"> {props.children} </Text>
        <Text>{subsOptions.filter((o) => o.value === props.children)[0].desc}</Text>
      </Box>
    </Box>
  )
}
