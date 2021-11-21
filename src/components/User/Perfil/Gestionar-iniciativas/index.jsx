// components
import { Heading, Divider } from '@chakra-ui/react'
import { UserLink } from 'components/User/Perfil/Links/Links'
import { UserExternalLink } from 'components/User/Perfil/Links/ExternalLink'
// data
import { paths } from 'services/routes'
import { user } from 'assets/data'
// icons
import { RiStarSmileLine } from 'react-icons/ri'
import { AiOutlineEuro } from 'react-icons/ai'
import { MdOutlinePayments } from 'react-icons/md'

export const ManageSubs = () => {
  return (
    <>
      <Heading> Gestionar donaciones </Heading>

      <UserLink path={paths.iniciativas} icon={<RiStarSmileLine />} name="Ver mis iniciativas"/>
      <Divider />
      <UserLink path={paths.planes} icon={<MdOutlinePayments />} name="Ver mi plan acual"/>
      <Divider />
      <UserExternalLink icon={<AiOutlineEuro/>}  link={user.billing_link} name='Ver mis facturas'/>
    </>
  )
}