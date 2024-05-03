import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import type { BoxProps } from '@chakra-ui/react'
import React from 'react'

const Facts: React.FC<{ desc: string } & BoxProps> = ({ desc, ...rest }) => (
  <Box
    textitem="center"
    maxW="250px"
    p={5}
    shadow="md"
    borderWidth="1px"
    {...rest}
  >
    <Text>{desc}</Text>
  </Box>
)

const AboutMe: React.FC = () => (
  <Box width="100%" mb={10} p={5}>
    <Heading fontSize="12.5rem" mb="10vh">
      Hi, <br /> I´m Fabian!
    </Heading>
    <Heading textAlign="center" mb={4}>
      Short Facts About Me
    </Heading>
    <Image src='/Images/Me.png'/>
    <SimpleGrid minChildWidth="250px" spacing={5}>
      <Facts desc="9th semester Business student @HKA Karlsruhe" />
      <Facts desc="28 years old!" />
      <Facts desc="Interested in Softwaredevelopment (Frontend & Backend)" />
      <Facts desc="Hiking and Karting" />
      <Facts desc="Goal for 2024 run a half-marathon" />
    </SimpleGrid>
  </Box>
)

export default AboutMe
