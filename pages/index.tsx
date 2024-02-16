import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from '../components/NavBar'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import SchoolProjects from '../components/SchoolProjects'

const Homepage: React.FC = () => {
  return (
    <ChakraProvider>
      <React.StrictMode>
        <NavBar />
        <AboutMe />
        <Projects />
        <SchoolProjects />
      </React.StrictMode>
    </ChakraProvider>
  )
}

export default Homepage
