import { createMuiTheme } from  "@material-ui/core/styles"
import{ GreenPastel, GrayLight, GrayDark, BlackLight } from "constants/colors"
//style par défaut des composants
export default createMuiTheme({

    palette :  {

        primary : {
            main : GreenPastel,
        },
        error : {
            main : GrayDark
        },
        text : {
            primary : BlackLight
        },
        background : {
            default : GreenPastel
        }

    },

    typography : {

    fontFamily: "Boowie",
    
    h1:{
        fontWeight: 600,
        letterSpacing : "-2px",
        fontSize : "3rem",
    },
    h2:{
        fontWeight: 600,
        letterSpacing : "-2px",
        fontSize : "3rem",
    },
    h3:{
        fontWeight: 600,
        letterSpacing : "-2px",
        fontSize : "3rem",
    },
    h4:{
        fontWeight: 600,
        letterSpacing : "-2px",
        fontSize : "3rem",
    },
    h5:{
        fontWeight: 600,
        letterSpacing : "-2px",
        fontSize : "3rem",
    },
    body:{
        fontWeight: 600,
        letterSpacing : "-2px",
        fontSize : "3rem",
    },

    }
})