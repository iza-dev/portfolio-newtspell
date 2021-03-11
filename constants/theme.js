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
      fontWeight: 100,
      letterSpacing: '15px',
      fontSize: '5rem'
    }

  }
})
