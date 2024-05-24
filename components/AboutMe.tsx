import { type ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { Box, Grid, ThemeProvider, Typography } from '@mui/material'
import HeroPicture from '/public/Me.png'
import theme, { accentBlue } from './Theme'
import React from 'react'
import Image from 'next/image'

const heroPictureStyle = { borderRadius: '50' }

export default function AboutMe(): ReactJSXElement {
  return (
    <Box mb={10}>
      <ThemeProvider theme={theme}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Typography variant="h1">
            Hi, <br /> I´m Fabian<span style={{ color: accentBlue }}>!</span>
          </Typography>

          <Image
            src={HeroPicture}
            alt="HeroPicture"
            width="260"
            height="350"
            style={heroPictureStyle}
            loading="lazy"
            quality={100}
          />
        </Grid>
        <Typography variant="h2" mt={15}>
          About me
        </Typography>
        <Box
          mr={2}
          mt={2}
          mb={2}
          border="3px solid"
          borderRadius="15px"
          borderColor={accentBlue}
          sx={{ boxShadow: 5, padding: 2, width: '950px', height: '225px' }}
        >
          <Typography variant="h3">
            I´m a Business Informatics student in 9th Semester @HKA based in
            Karlsruhe DE! <br /> <br />
            I´m interessted in Go Kart racing and hiking! <br /> <br />
            I´m looking for new challanges, so i decided to run a half-marthon
            this year! <br />
            <br />
            I´m interessted in Softwaredevelopment -- Front- and Backend!
          </Typography>
        </Box>
      </ThemeProvider>
    </Box>
  )
}
