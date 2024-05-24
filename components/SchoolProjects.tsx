import { type ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import React from 'react'
import theme, { accentBlue } from './Theme'
import { Box, Grid, Typography, ThemeProvider } from '@mui/material'

export default function SchoolProjects(): ReactJSXElement {
  return (
    <Box textAlign="center" mb={10}>
      <ThemeProvider theme={theme}>
        <Typography variant="h2" mb={15}>
          Projects <span style={{ color: accentBlue }}>@</span> HKA!
        </Typography>
        <Grid container alignItems="flex-start">
          <Box
            mr={2}
            mt={2}
            mb={2}
            border="3px solid"
            borderRadius="15px"
            borderColor={accentBlue}
            sx={{ boxShadow: 5, padding: 2, width: '475px', height: '200px' }}
          >
            <Typography variant="h3">GraphQL/Restful API</Typography>
            <Typography variant="body1">
              To learn how apis are working, we build a client and server
              application to learn on it. We learn witch frameworks are common
              and how to use them. We also learned about the Domain Driven
              Design and how to implement it in our application.
            </Typography>
            <Typography variant="h3" mt={2}>
              Used Technologies
            </Typography>
            <Typography variant="body1">
              Java 20, Spring Framework, PostgreSQL, Docker & Kubernetes
            </Typography>
          </Box>
          <Box
            mr={2}
            mt={2}
            mb={2}
            border="3px solid"
            borderRadius="15px"
            borderColor={accentBlue}
            sx={{ boxShadow: 5, padding: 2, width: '475px', height: '200px' }}
          >
            <Typography variant="h3">Android App</Typography>
            <Typography variant="body1">
              To learn the process from a business idea to the product. We
              develop our business idea to an android app. Our idea was a easy
              refund Deutsche Bahn ticket system. In this case we develop an
              android prototype application.
            </Typography>
            <Typography variant="h3" mt={2}>
              Used Technologies
            </Typography>
            <Typography variant="body1">Kotlin & RoomDatabase</Typography>
          </Box>
          <Box
            mr={2}
            mt={2}
            mb={2}
            border="3px solid"
            borderRadius="15px"
            borderColor={accentBlue}
            sx={{ boxShadow: 5, padding: 2, width: '475px', height: '200px' }}
          >
            <Typography variant="h3">React Web App</Typography>
            <Typography variant="body1">
              The GraphQL/Rest API from the previous semester should now be made
              available to end users with a suitable front end. For this
              purpose, the project was translated into JavaScript/TypeScript and
              supplemented, e.g. with a Jenkins pipeline or GitHub actions.
            </Typography>
            <Typography variant="h3" mt={2}>
              Used Technologies
            </Typography>
            <Typography variant="body1">
              JavaScript/TypeScript, Nest.js, Chakra UI
            </Typography>
          </Box>
          <Box
            mr={2}
            mt={2}
            mb={2}
            border="3px solid"
            borderRadius="15px"
            borderColor={accentBlue}
            sx={{ boxShadow: 5, padding: 2, width: '475px', height: '200px' }}
          >
            <Typography variant="h3">HKA APP</Typography>
            <Typography variant="body1">
              Maintaining the IOS Campus App, more in the future
            </Typography>
            <Typography variant="h3" mt={2}>
              Used Technologies
            </Typography>
            <Typography variant="body1">Swift</Typography>
          </Box>
          <Box
            mr={2}
            mt={2}
            mb={2}
            border="3px solid"
            borderRadius="15px"
            borderColor={accentBlue}
            sx={{ boxShadow: 5, padding: 2, width: '475px', height: '200px' }}
          >
            <Typography variant="h3">ESG Web-Crawler</Typography>
            <Typography variant="body1">
              Build an Web-Crawler for a company that collect a bunch of
              different ESG Reports to document their co2 footprint an compare
              to other companies
            </Typography>
            <Typography variant="h3" mt={2}>
              Used Technologies
            </Typography>
            <Typography variant="body1">Phyton</Typography>
          </Box>
        </Grid>
      </ThemeProvider>
    </Box>
  )
}
