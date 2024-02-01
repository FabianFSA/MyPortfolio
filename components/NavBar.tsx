import { HStack, Link } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import React from 'react'

const handleEmail = () => {
  const emailAddress = 'test-email@gmail.com'
  const subject = 'Contact via Portvoliowebsite'

  window.location.href = `mailto:${emailAddress}?subject=${subject}`
}

const NavBar: React.FC = () => (
  <HStack width="100%" mb={10}>
    <EmailIcon cursor="pointer" onClick={handleEmail} boxSize={'2em'} />
  </HStack>
)

export default NavBar
