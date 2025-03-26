import { Box, Grid, ThemeProvider, Typography } from '@mui/material'
import theme from './Theme'

export default function AboutMe() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h2" mt={15} textAlign="center">
        About me
      </Typography>

      <Grid container alignItems="center" justifyContent="center">
        <Box className="boxLarge">
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
