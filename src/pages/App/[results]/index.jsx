// components
import { Heading } from '@chakra-ui/react'
import { Solutions } from 'components/App/Results/Solutions-complete'
import { Statistics } from 'components/App/Results/Statistics-complete'
import { BackButton } from 'components/ui/Button/Back'

export const Results = () => {
  return (
    <>
      <Heading> Results </Heading>
      <BackButton/>
      <Statistics />

      <br/>

      <Solutions />
    </>
  )
}
