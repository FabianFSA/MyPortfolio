import React from 'react'
import NavBar from '../components/NavBar'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import SchoolProjects from '../components/SchoolProjects'
import { Box } from '@mui/material'

const Homepage: React.FC = () => {
  return (
    <React.StrictMode>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
      ></link>

      <NavBar />
      <Box p={10} maxWidth="1750px">
        <AboutMe />
        <Projects />
        <SchoolProjects />
      </Box>
    </React.StrictMode>
  )
}

export default Homepage
