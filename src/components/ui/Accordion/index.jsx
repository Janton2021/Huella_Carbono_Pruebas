import { Heading, Text } from '@chakra-ui/react'
import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/accordion'

export const Acc = ({ title, content }) => {
  return (
    <>
      <AccordionItem>
        <AccordionButton>
          <Heading size='sm'> {title} </Heading>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Text> {content} </Text>
        </AccordionPanel>
      </AccordionItem>
    </>
  )
}
