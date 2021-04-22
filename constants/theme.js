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

  overrides: {
    MuiCssBaseline: {
      '@global': {
        'body, html': {
          margin: 0,
          padding: 0
        },
        '*, *::before, *::after': {
          boxSizing: 'border-box'
        },
        main: {
          width: '85%',
          margin: 'auto'
        }
      }
    }
  },

  typography: {

    fontFamily: 'Arial',
    htmlFontSize: 10,

    h1: {
      fontWeight: 600,
      letterSpacing: '1rem',
      textTransform: 'uppercase'
    },
    h2: {
      fontWeight: 300,
      letterSpacing: '.5rem',
      textTransform: 'uppercase'
    },
    h3: {
      fontWeight: 600,
      letterSpacing: '.09rem',
      textTransform: 'uppercase',
      fontSize: '3.5rem',
      marginTop:'10rem'
    },
    h4: {
      fontWeight: 80,
      letterSpacing: '.09rem',
      fontSize: '2.5rem',
      marginTop:'.5rem',
      marginBottom:'4rem',
      marginLeft:'4rem',
      marginRight:'4rem'
    }

  }
})
