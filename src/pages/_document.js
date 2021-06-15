//import { Box, ColorModeScript } from "@chakra-ui/react"
import NextDocument, { Html, Head, Main, NextScript } from "next/document"
//import theme from "./theme"

import bnbLogo from '../images/logo-big-bnb.svg'
import { APP_NAME } from "../utils/c"

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charset="utf-8" />
          <meta name="keywords" content="" />
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />
          <link rel="stylesheet" href="resources/assets/revealator/fm.revealator.jquery.css" />
          <link rel="apple-touch-icon" sizes="180x180" href="resources/img/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32S32" href="/resources/img/favicon/favicon-32S32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/resources/img/favicon/favicon-16x16.png" />
          <link rel="shortcut icon" href="resources/img/favicon/favicon.png" />

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css?v=0" />

          <meta name="apple-mobile-web-app-title" content={APP_NAME} />
          <meta name="application-name" content={APP_NAME} />
          <meta name="msapplication-TileColor" content="#000" />
          <meta name="theme-color" content="#ffffff" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&amp;display=swap" rel="stylesheet" />
        </Head>
        <body className="at-top">
          {/*<ColorModeScript initialColorMode={theme.config.initialColorMode} />*/}
          <Main />
          <NextScript />
          <script src="/resources/assets/jquery/jquery.min.js"></script>
          <script src="https://unpkg.com/spritespin@x.x.x/release/spritespin.js" type="text/javascript"></script>
          <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
          <script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
          <script src="/resources/assets/fullpage/scrolloverflow.min.js"></script>
          <script src="/resources/assets/fullpage/fullpage.min.js"></script>
          <script src="/resources/assets/fullpage/fullpage.extensions.min.js"></script>
          <script src="/resources/assets/revealator/fm.revealator.jquery.js"></script>
          <script src="/resources/js/index.js"></script>
        </body>
      </Html>
    )
  }
}