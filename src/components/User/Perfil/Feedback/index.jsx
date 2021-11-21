// components
import { Heading, Text, Textarea, Link } from '@chakra-ui/react'
import { SubmitBtn } from 'components/ui/Button/Submit'
// hooks
import { useState } from 'react'
// data
import { support } from 'assets/data'

export const Feedback = () => {
    // inputs
    const [info, setinfo] = useState('')
    const handleInput = (e) => setinfo(e.target.value)
    const handleSubmit = (e) => {
      e.preventDefault()
      console.info(info)
    }
    const isValid = info !== '' 
  return (
    <>
      <Heading> Send feedback or bug report </Heading>
      <Text> Let us know how we can improve </Text>
      <form method="POST" onSubmit={handleSubmit}>
        <Textarea value={info} onChange={handleInput}/>

        <Text> You can also email us at <Link color='primary.500'  href={`mailto:${support.email}`} isExternal> {support.email} </Link> </Text>
        <SubmitBtn isValid={isValid} name="Send feedback" />
      </form>
    </>
  )
}
