import { HStack } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import React from 'react'

const handleEmail = () => { // eslint-disable-line @typescript-eslint/explicit-function-return-type
  const emailAddress = 'sauerfabian.safa@gmail.com'
  const subject = 'Contact via Portvoliowebsite'

  window.location.href = `mailto:${emailAddress}?subject=${subject}`
}

const NavBar: React.FC = () => (
  <HStack justify="flex-end" width="100%" mb={10} p={5}>
    <EmailIcon cursor="pointer" onClick={handleEmail} boxSize={'2em'} />
  </HStack>
)

export default NavBar
