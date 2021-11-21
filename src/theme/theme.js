// chakra
import { extendTheme, withDefaultColorScheme, withDefaultVariant } from '@chakra-ui/react'
// foundation
import { styles } from 'theme/global'
import { colors } from 'theme/foundations/colors'
import { fonts } from 'theme/foundations/fonts'
import { colorScheme } from 'theme/foundations/colorScheme'
import { variant } from 'theme/foundations/variant'
// components
import { Button } from 'theme/components/button'
import { Card } from 'theme/components/card'
import { Checkbox } from 'theme/components/checkbox'
import { Input } from 'theme/components/input'
import { Radiocard } from './components/radiocard'

export const theme = extendTheme(
  {
    styles,
    colors,
    fonts,
    components:{
      Button,
      Card,
      Checkbox,
      Input,
      Radiocard,
    }
  },
  withDefaultColorScheme(colorScheme),
  withDefaultVariant(variant)
)