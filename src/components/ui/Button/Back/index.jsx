// components
import { IconButton } from '@chakra-ui/react'
// icons
import { IoMdArrowBack } from 'react-icons/io'
// hooks
import { useHistory } from 'react-router-dom'

export const BackButton = () => {
  const history = useHistory()
  const goBack = () => history.goBack()

  return (
    <>
      <IconButton onClick={goBack} variant="outline" icon={<IoMdArrowBack />} />
    </>
  )
}
