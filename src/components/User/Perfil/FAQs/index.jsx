// components
import { Heading } from '@chakra-ui/react'
import { Accordion } from '@chakra-ui/accordion'
import { Acc } from 'components/ui/Accordion'
// data
import { faqOptions } from 'assets/data'

export const FAQs = () => {
  return (
    <>
      <Heading> FAQs </Heading>

      <Accordion>
        {faqOptions.map((e) => (
          <Acc key={e.title} title={e.title} content={e.content} />
        ))}
      </Accordion>
    </>
  )
}
