// components
import { IconButton } from '@chakra-ui/react'
// data
import { Link } from 'react-router-dom'
import { paths } from 'services/routes'
// icons
import { AiOutlineCalculator } from 'react-icons/ai'

export const FAB = () => {
  return (
    <>
      <Link to={paths.calculator}>
        <IconButton
          size="lg"
          isRound
          pos="fixed"
          right={6}
          bottom={90}
          icon={<AiOutlineCalculator />}
        />
      </Link>
    </>
  )
}
