import { createMuiTheme } from '@material-ui/core/styles'
import { GreenPastel, GrayLight, GrayDark, BlackLight } from 'constants/colors'
// style par défaut des composants
export default createMuiTheme({

  palette: {

    primary: {
      main: GreenPastel
    },
    error: {
      main: GrayDark
    },
    text: {
      primary: BlackLight
    },
    background: {
      default: GrayLight
    }

  },

  typography: {

    fontFamily: 'Arial',
    htmlFontSize: 10,

    h1: {
      fontWeight: 600,
      letterSpacing: '1rem',
      textTransform: 'uppercase',
      fontSize: '10rem'
    },
    h2: {
      fontWeight: 300,
      letterSpacing: '.5rem',
      textTransform: 'uppercase',
      fontSize: '3rem'
    }

  }
})
