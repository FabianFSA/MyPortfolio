import { createTheme } from '@mui/material/styles'

export const accentBlue = '#4685FF'

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto',
    h1: {
      fontSize: 125,
      fontWeight: 700
    },
    h2: {
      fontSize: 75,
      fontWeight: 500
    },
    h3: {
      fontSize: 25,
      fontWeight: 500
    },
    body1: {
      fontSize: 15,
      fontWeight: 300
    }
  }
})

export default theme
