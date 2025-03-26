import React from 'react'
import theme, { accentBlue } from './Theme'
import { Box, Grid, Typography, ThemeProvider } from '@mui/material'

export default function SchoolProjects() {
  return (
    <Box textAlign="center" mb={10}>
      <ThemeProvider theme={theme}>
        <Typography variant="h2" className="heading2">
          Projects <span style={{ color: accentBlue }}>@</span> HKA!
        </Typography>
        <Grid container alignItems="center" justifyContent="center">
          <Box className="boxProjects">
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
          <Box className="boxProjects">
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
          <Box className="boxProjects">
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
              JavaScript/TypeScript, Nest.js, Chakra UI, GitHub Actions
            </Typography>
          </Box>
          <Box className="boxProjects">
            <Typography variant="h3">HKA APP</Typography>
            <Typography variant="body1">
              The HKA app is the campus app of Karlsruhe University of Applied
              Sciences. In addition to the grades, other information can be
              accessed, such as the meal plan of the canteen. My main task was
              to make the list of people visible again and to move from google
              maps to apple map.
            </Typography>
            <Typography variant="h3" mt={2}>
              Used Technologies
            </Typography>
            <Typography variant="body1">Swift</Typography>
          </Box>
          <Box className="boxProjects">
            <Typography variant="h3">ESG Web-Crawler</Typography>
            <Typography variant="body1">
              As part of an application project, a company has commissioned an
              ESG web crawler to independently search for companies in various
              industries and download sustainability reports and extract certain
              data such as the company's CO2 footprint according to SCOPE 1-3. I
              was mainly responsible for the AI that filters the individual data
              from the respective ESG report and converts it into a desired
              format.
            </Typography>
            <Typography variant="h3" mt={2}>
              Used Technologies
            </Typography>
            <Typography variant="body1">Phyton & AWS Textract</Typography>
          </Box>
          <Box className="boxProjectsLarge">
            <Typography variant="h3">
              Bicycle Production: A Smart Planning Tool
            </Typography>
            <Typography variant="body1">
              For the complex production of three different bicycle models, a
              specialized production planning tool was developed. Initially, all
              production planning was calculated manually, including not only
              the number of bicycles to be produced but also the required
              materials and employee working hours. Certain materials needed to
              be purchased, and delivery times had to be carefully considered.
              The tool was designed to fully automate the entire production
              planning process. Additionally, it provided the flexibility to
              split batch sizes and adjust the processing sequence. My primary
              responsibility was implementing the batch-splitting functionality
              and enabling dynamic reordering of the production sequence.
            </Typography>
            <Typography variant="h3" mt={2}>
              Used Technologies
            </Typography>
            <Typography variant="body1">C#</Typography>
          </Box>
        </Grid>
      </ThemeProvider>
    </Box>
  )
}
