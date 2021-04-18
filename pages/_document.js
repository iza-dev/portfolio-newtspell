import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import {ServerStyleSheet} from "styled-components"
import {ServerStyleSheets} from "@material-ui/styles"
import { Typography } from '@material-ui/core'
import theme from "constants/theme"

// seulement rendu côté server, donc les gestionnaires d'évènements comme onclick ne
// fonctionne pas ici
// Les pages dans Next.js ignorent la définition du balisage du document environnant.
// Par exemple, vous n'inclure <html>, <body>etc. Pour remplacer ce comportement par
// défaut, vous devez créer un fichier à ./pages/_document.jsoù vous pouvez étendre la
// classe de document.
class CustomDocument extends Document {
  //https://github.com/vercel/next.js/blob/master/examples/with-styled-components/pages/_document.js
  //https://github.com/vercel/next.js/tree/master/examples/with-styled-components
  //on peu utiliser les feuilles de style de styled components
  static async getInitialProps(ctx){
    const styledComponentSheet = new ServerStyleSheet()
    const materialSheets = new ServerStyleSheets()
    const originalRenderpage = ctx.renderPage 
    try{
      ctx.renderPage= () =>
      originalRenderpage({
        enhanceApp : (App) => (props) =>
          styledComponentSheet.collectStyles(materialSheets.collect(<App {...props} />)),
      })
      const initialProps = await Document.getInitialProps(ctx)

      return{
        ...initialProps,
        styles : [
          <React.Fragment key="styles">
            {initialProps.styles}
            {materialSheets.getStyleElement()}
            {styledComponentSheet.getStyleElement()}
          </React.Fragment>,
        ],
      };
    }finally{
        styledComponentSheet.seal()
    }
  }

  render () {
    return (
      <Html lang='fr' dir='tir'>
        <Head>
          <meta name='Portfolio' content='Portfolio of NewtSpell' />
          <meta name='theme-color' content='#4285f4' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
