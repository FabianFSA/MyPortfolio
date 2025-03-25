import { type ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import React from 'react'
import theme, { accentBlue } from './Theme'
import { Box, Grid, Typography, ThemeProvider } from '@mui/material'

export default function Projects_Exxeta(): ReactJSXElement {
  return (
    <Box textAlign="center" mb={10}>
      <ThemeProvider theme={theme}>
        <Typography variant="h2" mb={15}>
          Projects <span style={{ color: accentBlue }}>@</span> Exxeta!
        </Typography>
        <Grid container alignItems="flex-start">
          <Box
            mr={2}
            mt={2}
            mb={2}
            border="3px solid"
            borderRadius="15px"
            borderColor={accentBlue}
            sx={{ boxShadow: 5, padding: 2, width: '1200px', height: '200px' }}
          >
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
