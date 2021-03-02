import React from "react"
import Document, {Html, Head, Main, NextScript} from "next/document"
// import {ServerStyleSheet} from "styled-components";
// import theme from "constants/theme"


//seulement rendu côté server, donc les gestionnaires d'évènements comme onclick ne 
//fonctionne pas ici
//Les pages dans Next.js ignorent la définition du balisage du document environnant. 
//Par exemple, vous n'inclure <html>, <body>etc. Pour remplacer ce comportement par 
//défaut, vous devez créer un fichier à ./pages/_document.jsoù vous pouvez étendre la 
//classe de document.
class CustomDocument extends Document {
    //app document 3:36
    render(){
        return(
            <Html lang="fr" dir="tir">
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="Portfolio" content="Portfolio of NewtSpell"/>
                    <meta name="theme-color" content="#4285f4"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default  CustomDocument;