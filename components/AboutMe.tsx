import { Box, Grid, ThemeProvider, Typography } from '@mui/material'
import theme, { accentBlue } from './Theme'

export default function Intro(): ReactJSXElement {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h2" mt={15} textAlign="center">
        About me
      </Typography>
      <Grid container alignItems="flex-start">
        <Box
          mr={2}
          mt={2}
          mb={2}
          border="3px solid"
          borderRadius="15px"
          borderColor={accentBlue}
          sx={{ boxShadow: 5, padding: 2, width: '1200px', height: '225px' }}
        >
          <Typography variant="h3">
            I recently graduated with a degree in Business Informatics.<br></br>
            <br></br>
            As a student, I already had the opportunity to contribute to various
            client projects. <br></br>
            <br></br>You can check out my skills through the following projects.
          </Typography>
        </Box>
      </Grid>
    </ThemeProvider>
  )
}
