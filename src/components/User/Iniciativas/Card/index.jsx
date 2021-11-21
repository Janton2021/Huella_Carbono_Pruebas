// components
import { Heading, VStack, HStack, Text, Box } from '@chakra-ui/react'
import { Card } from 'components/ui/Card'
import { IniciativaForm } from '../Form'

import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

export const IniciativasList = ({ id, title, description, text, url }) => {
  return (
    <>
      <Card bg="red.100" w="full" p={0} my={3}>
        <AccordionItem w="full" border="0">
          <h2>
            <AccordionButton p="0" pr={3}>
              <HStack w="full" overflow="hidden">
                <Box w="80px" h="80px" bg="gray.700" />
                <VStack pl={4} alignItems="flex-start">
                  <Heading size="sm"> {title} </Heading>
                  <Text> {text} </Text>
                </VStack>
              </HStack>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack>
              <Text pl={20}> {description} </Text>
              <br/>
              <IniciativaForm id={id}/>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Card>
    </>
  )
}
