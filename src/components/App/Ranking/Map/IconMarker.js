import { Stack, Button, ArrowForwardIcon, EmailIcon } from '@chakra-ui/react'
import { BsFillPersonFill } from 'react-icons/bs'


const iconMarker = () => {
    return (
        

            <Stack direction="row" spacing={4}>
                 <Button leftIcon={<BsFillPersonFill />} colorScheme="teal" variant="solid" rightIcon={<ArrowForwardIcon />} >
                   Juan Antón
                 </Button>
             </Stack>
        )}


        export default iconMarker