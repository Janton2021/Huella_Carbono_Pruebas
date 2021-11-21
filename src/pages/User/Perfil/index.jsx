// components
import { Heading, Divider, VStack } from '@chakra-ui/react'
import { Modal } from 'components/ui/Modal'
import { PerfilCard } from 'components/User/Perfil/Avatar'
import { Feedback } from 'components/User/Perfil/Feedback'
import { FAQs } from 'components/User/Perfil/FAQs'
import { Accesibilidad } from 'components/User/Perfil/Accesibilidad'
import { UserLink } from 'components/User/Perfil/Links/Links'
import { UserModal } from 'components/User/Perfil/Links/Modal'
import { ManageSubs } from 'components/User/Perfil/Gestionar-iniciativas'
// data
import { paths } from 'services/routes'
import { user } from 'assets/data'
// icons
import { FiMoon, FiLogOut, FiSun } from 'react-icons/fi'
import { RiStarSmileLine, RiChatSmile2Line } from 'react-icons/ri'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { IoPeopleOutline } from 'react-icons/io5'
// hooks
import { useColorMode } from '@chakra-ui/color-mode'
import { useDisclosure } from '@chakra-ui/hooks'

export const Perfil = () => {
  // styling
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen: FiO, onOpen: FoO, onClose: FoC } = useDisclosure()
  const { isOpen: FAQiO, onOpen: FAQoO, onClose: FAQoC } = useDisclosure()
  const { isOpen: MSiO, onOpen: MSoO, onClose: MSoC } = useDisclosure()
  const { isOpen: AiO, onOpen: AoO, onClose: AoC } = useDisclosure()

  return (
    <>
      <Heading> Perfil </Heading>

      <VStack alignItems="flex-start" w="full" py={4}>
        <PerfilCard name={user.name} user={user.user} />
        <Divider />
        <UserModal onClick={MSoO} icon={<RiStarSmileLine />} name="Mis iniciativas"
        />
        <Modal isOpen={MSiO} onClose={MSoC} content={<ManageSubs />} />
        <Divider />

        <UserModal
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
          name={colorMode === 'light' ? 'Dark mode' : 'Light mode'}
        />

        <UserModal onClick={AoO} icon={<IoPeopleOutline />} name="Accesibilidad" />
        <Modal isOpen={AiO} onClose={AoC} content={<Accesibilidad />} />

        <Divider />
        
        <UserModal onClick={FAQoO} icon={<AiOutlineInfoCircle />} name="FAQs" />
        <Modal isOpen={FAQiO} onClose={FAQoC} content={<FAQs />} />

        <UserModal onClick={FoO} icon={<RiChatSmile2Line />} name="Feedback" />
        <Modal isOpen={FiO} onClose={FoC} content={<Feedback />} />
        <Divider />

        <UserLink path={paths.onboarding} icon={<FiLogOut />} name="Log out" />
      </VStack>
    </>
  )
}
