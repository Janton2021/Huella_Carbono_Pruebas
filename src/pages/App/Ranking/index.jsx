// components
import { Heading } from '@chakra-ui/react'
import { RankingTable } from 'components/App/Ranking/Table-complete'
import { Mapping } from 'components/App/Ranking/Map/index'


export const Ranking = () => {
  return (
    <>
      <Heading> Ranking & Map </Heading>
      <br/>
      <Mapping />
      <br/>
      <RankingTable />
    </>
  )
}
