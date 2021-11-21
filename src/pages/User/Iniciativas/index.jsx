// components
import { Heading, Accordion } from '@chakra-ui/react'
import { IniciativasList } from 'components/User/Iniciativas/Card'
// data
import { iniciativas } from 'assets/data'

export const Iniciativas = () => {

  return (
    <>
      <Heading> Iniciativas </Heading>
      <Accordion allowToggle w="full">
        {iniciativas.map((e) => <IniciativasList key={e.id} title={e.title} text={e.text} description={e.description} url={e.url} id={e.id} />)}
      </Accordion>
    </>
  )
}
