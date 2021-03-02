// import '../styles/globals.scss'

// // function MyApp({ Component, pageProps }) {
// //   return <Component {...pageProps} />
// // }

// export default MyApp 
import React from "react"
import PropTypes from "prop-types"
import Head from "next/head"
import { ThemeProvider, responsiveFontSizes } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "constants/theme"

// _app est rendu à la fois côté serveur et côté client (sur le serveur pendant le SSR 
//initial, côté client après hydratation et ensuite sur chaque page / route de navigation)
//https://nextjs.org/learn/basics/assets-metadata-css/global-styles
//https://vercel.com/blog/next6#app-component
export default function App(props){

  let ResponsiveFontTheme = responsiveFontSizes(theme)
  const {Component, pageProps} = props;
  
  React.useEffect(()=>{
    const jsStyles = document.querySelector("#jss-server-side");
    if(jsStyles){
      jsStyles.parentElement.removeChild(jsStyles)
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>NewtSpell · Portfolio </title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>
        <link rel="stylesheet" href="/static/style.scss"/>
      </Head>
        <ThemeProvider theme={ResponsiveFontTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
    </React.Fragment>
  )
}

App.PropTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};