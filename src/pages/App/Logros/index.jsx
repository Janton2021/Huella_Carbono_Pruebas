// components
import { Heading } from '@chakra-ui/react'
import { LogrosTable } from 'components/App/Logros/Table-complete'
import { LogrosDiscount } from 'components/App/Logros/Discount'

export const Logros = () => {
  return (
    <>
      <Heading> Logros </Heading>
      <LogrosTable />
      <br/>
      <LogrosDiscount/>
    </>
  )
}
