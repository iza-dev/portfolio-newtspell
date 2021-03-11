import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from 'constants/theme'

// _app est rendu à la fois côté serveur et côté client (sur le serveur pendant le SSR
// initial, côté client après hydratation et ensuite sur chaque page / route de navigation)
// https://nextjs.org/learn/basics/assets-metadata-css/global-styles
// https://vercel.com/blog/next6#app-component
export default function App (props) {
  const ResponsiveFontTheme = responsiveFontSizes(theme)
  const { Component, pageProps } = props

  React.useEffect(() => {
    const jsStyles = document.querySelector('#jss-server-side')
    if (jsStyles) {
      jsStyles.parentElement.removeChild(jsStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>NewtSpell · Portfolio </title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no' />
        <link rel='stylesheet' href='/static/style.scss' />
      </Head>
      <ThemeProvider theme={ResponsiveFontTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

App.PropTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}
