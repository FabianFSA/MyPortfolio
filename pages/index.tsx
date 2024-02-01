import React from 'react'
import { Box, ChakraProvider, Container, Heading, Text } from '@chakra-ui/react'
import NavBar from '../components/NavBar'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'

const homepage: React.FC = () => {
  return (
    <ChakraProvider>
      <Container minWidth="100vh">
        <NavBar />
        <AboutMe />
        <Projects />
      </Container>
    </ChakraProvider>
  )
}

export default homepage
