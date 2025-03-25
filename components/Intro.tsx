import { Box, Grid, ThemeProvider, Typography } from '@mui/material'
import HeroPicture from '../assets/images/fabian_sauer.jpeg'
import theme, { accentBlue } from './Theme'
import React from 'react'
import Image from 'next/image'
import { CenterFocusStrong, Height } from '@mui/icons-material'

const centerDiv = {
  display: 'flex',
  justifyContent: 'center'
}
const heroPictureStyle = { borderRadius: '50%', maxWidth: 600, maxHeight: 600 }

export default function Intro() {
  return (
    <Box mb={10}>
      <ThemeProvider theme={theme}>
        <Typography mb={10} variant="h1" textAlign="center">
          Hi, <br /> I´m Fabian
          <span style={{ color: accentBlue }}>!</span>
        </Typography>
        <div style={centerDiv}>
          <Image
            src={HeroPicture}
            alt="HeroPicture"
            style={heroPictureStyle}
            loading="lazy"
          />
        </div>
      </ThemeProvider>
    </Box>
  )
}
