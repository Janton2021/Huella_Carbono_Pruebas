import { Stack, Button, ArrowForwardIcon, EmailIcon } from '@chakra-ui/react'
import { BsFillPersonFill } from 'react-icons/bs'


export const iconMarker = () => {
    return (
        

            <Stack direction="row" spacing={4}>
                 <Button leftIcon={<EmailIcon />} colorScheme="teal" variant="solid" rightIcon={<ArrowForwardIcon />} >
                   Juan Antón
                 </Button>
             </Stack>
        )}
    

        
  // const IconLocation = (places) => {
  //       return <chakra.div style={{ color:'red'}}> {places.name}</chakra.div>
  //   }