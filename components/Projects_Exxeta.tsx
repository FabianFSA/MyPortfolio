import React from 'react'
import theme, { accentBlue } from './Theme'
import { Box, Grid, Typography, ThemeProvider } from '@mui/material'

export default function Projects_Exxeta() {
  return (
    <Box textAlign="center" mb={10}>
      <ThemeProvider theme={theme}>
        <Typography variant="h2" mb={2}>
          Projects <span style={{ color: accentBlue }}>@</span> Exxeta!
        </Typography>
        <Grid container alignItems="center" justifyContent="center">
          <Box className="boxLarge">
            <Typography variant="h3">
              Evaluation and prototypical implementation of a serverless
              application for proccessing employee data
            </Typography>
            <Typography variant="body1">
              My bachelor thesis is about operating a service permanently in the
              AWS cloud serverless. The prototype is compared with the existing
              solution in terms of performance and costs. The service has
              various services, such as backend for an employee search,
              extracting data from an Excel and from the company's own intranet,
              as well as updating the Excel when a new employee is added.
            </Typography>
            <Typography variant="h3" mt={2}>
              Used Technologies
            </Typography>
            <Typography variant="body1">
              Python, AWS Lambda, AWS Aurora PostgreSQL
            </Typography>
          </Box>
        </Grid>
      </ThemeProvider>
    </Box>
  )
}
