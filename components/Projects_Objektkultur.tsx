import { type ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import React from 'react'
import theme, { accentBlue } from './Theme'
import { Box, Grid, Typography, ThemeProvider } from '@mui/material'

export default function Projects_Objektkultur(): ReactJSXElement {
  return (
    <Box textAlign="center" mb={10}>
      <ThemeProvider theme={theme}>
        <Typography variant="h2" mb={15}>
          Projects <span style={{ color: accentBlue }}>@</span> Objektkultur!
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
            <Typography variant="h3">RestFul App Api</Typography>
            <Typography variant="body1">
              There was a given API for a timebooking web application. The
              project target was to create a new RestFul Api for a mobile app.
              This API was used for mobile timebooking, skill management and
              vacation management.
            </Typography>
            <Typography variant="h3" mt={2}>
              Used Technologies
            </Typography>
            <Typography variant="body1">
              C#, RestFul, Open API, Swagger
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
            <Typography variant="h3">Change PDF Generator</Typography>
            <Typography variant="body1">
              The PDF generator-modul was deprecated. The support of this PDF
              generator will be end at the end of the year 2024. My Task was to
              find a proper new PDF generator. After a research we choose
              QuestPDF. The implementation of the new QuestPDF PDF generator was
              simply and quick.
            </Typography>
            <Typography variant="h3" mt={2}>
              Used Technologies
            </Typography>
            <Typography variant="body1">C#, QuestPDF</Typography>
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
            <Typography variant="h3">
              Service Instruction Service with Power Platform
            </Typography>
            <Typography variant="body1">
              Customer wanted send some service instruction to his employees
              with a approvel. This has been relaized with the Power Platform
              suite from Microsoft including Power Automate and Power App.
            </Typography>
            <Typography variant="h3" mt={2}>
              Used Technologies
            </Typography>
            <Typography variant="body1">
              Power Apps, Power Automate Flow, Dataverse
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
            <Typography variant="h3">New Exhibitioner Portal</Typography>
            <Typography variant="body1">
              A big german fair want a new exhibitioner portal overhaul. Ans
              specially for specific fairs they want separate portals. I was
              involved in the development of the booth request system. This was
              realised by logic apps. I was also involved in the process of
              creating a monitoring concept for the whole project. But just in
              early beginning phase.
            </Typography>
            <Typography variant="h3" mt={2}>
              Used Technologies
            </Typography>
            <Typography variant="body1">
              Logic Apps, Azure Functions, Dynamics 365
            </Typography>
          </Box>
          <Box
            mr={2}
            mt={2}
            mb={2}
            border="3px solid"
            borderRadius="15px"
            borderColor={accentBlue}
            sx={{ boxShadow: 5, padding: 2, width: '475px', height: '400px' }}
          >
            <Typography variant="h3">CRM Sync</Typography>
            <Typography variant="body1">
              The client is internationally active and is pursuing a
              digitalisation offensive to standardise its processes and make
              them scalable. The client recently replaced its previous CRM
              system with Dynamics 365. The customer data is composed of
              different data sources. In addition, different data was more
              relevant than others for each country. Another team prepared the
              data from the data sources and sent it uniformly via an Azure
              Service Bus. The team I supported had the task of synchronising
              this data into Dynamics 365, among other things. I was
              significantly involved in the development of the Azure function
              that was responsible for this.
            </Typography>
            <Typography variant="h3" mt={2}>
              Used Technologies
            </Typography>
            <Typography variant="body1">
              Power Apps, Azure Function, Dynamics 365, JavaScript, TypeScript,
              C#
            </Typography>
          </Box>
        </Grid>
      </ThemeProvider>
    </Box>
  )
}
