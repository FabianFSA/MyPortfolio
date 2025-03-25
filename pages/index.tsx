import React from 'react'
import NavBar from '../components/NavBar'
import AboutMe from '../components/AboutMe'
import Projects_Exxeta from '../components/Projects_Exxeta'
import Projects_Objektkultur from '../components/Projects_Objektkultur'
import SchoolProjects from '../components/SchoolProjects'
import Intro from '../components/Intro'
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
        <Intro />
        <AboutMe />
        <Projects_Exxeta />
        <Projects_Objektkultur />
        <SchoolProjects />
      </Box>
    </React.StrictMode>
  )
}

export default Homepage
