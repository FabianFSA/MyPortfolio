import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import type { BoxProps } from '@chakra-ui/react'
import React from 'react'

const Facts: React.FC<{ desc: string } & BoxProps> = ({ desc, ...rest }) => (
  <Box
    textAlign="center"
    maxW="250px"
    p={5}
    shadow="md"
    borderWidth="1px"
    {...rest}
  >
    <Text mt={4}>{desc}</Text>
  </Box>
)

const AboutMe: React.FC = () => (
  <Box width="100%" mb={10} p={5}>
    <Heading fontSize="12.5rem" mb="10vh">
      Hi,
      <br />
      I´m Fabian!
    </Heading>
    <Heading mb={4}>Short Facts About Me</Heading>
    <SimpleGrid minChildWidth="250px" spacing={10}>
      <Facts desc="8th semester Business student @HKA" />
      <Facts desc="28 years old!" />
      <Facts desc="Interested in Softwaredevelopment (Frontend & Backend)" />
      <Facts desc="Hiking and Karting" />
      <Facts desc='Goal for 2024 run a half-marathon' />
    </SimpleGrid>
  </Box>
)

export default AboutMe
