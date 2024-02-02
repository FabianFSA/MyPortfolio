import React from 'react'
import { ChakraProvider, Container } from '@chakra-ui/react'
import NavBar from '../components/NavBar'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'

const Homepage: React.FC = () => {
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

export default Homepage
