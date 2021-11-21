// componentes
import { Card } from 'components/ui/Card'
import { Heading, Button } from '@chakra-ui/react'
import { Table, Thead, Th, Tbody, Tr, Td } from '@chakra-ui/react'

export const RankingTable = () => {
  return (
    <>
      {/* <Card bg="red.100">
        <Heading size="md"> Tabla completa de Ranking </Heading>
        <Button colorScheme="secondary"> Filtrar por fecha </Button>
        <Button colorScheme="secondary"> Filtrar por ZIPCODE </Button>
      </Card> */}

      <br/>

      <Card>
        <Table>
          <Thead>
            <Tr>
              <Th>Ranking</Th>
              <Th>Nombre</Th>
              <Th>CP</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>Nombre</Td>
              <Td>28000</Td>
            </Tr>
            <Tr>
              <Td>1</Td>
              <Td>Nombre</Td>
              <Td>28000</Td>
            </Tr>
            <Tr>
              <Td>1</Td>
              <Td>Nombre</Td>
              <Td>28000</Td>
            </Tr>
            <Tr>
              <Td>1</Td>
              <Td>Nombre</Td>
              <Td>28000</Td>
            </Tr>
          </Tbody>
        </Table>
      </Card>
    </>
  )
}
