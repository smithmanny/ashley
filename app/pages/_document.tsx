import {
  DocumentContext,
  Document,
  Html,
  DocumentHead,
  Head,
  Main,
  BlitzScript /*DocumentContext*/,
} from "blitz"

import React from "react"
import CssBaseline from "@mui/material/CssBaseline"
import { ServerStyleSheets } from "@mui/styles"

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      })

    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    }
  }

  // Only uncomment if you need to customize this behaviour
  // static async getInitialProps(ctx: DocumentContext) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return {...initialProps}
  // }

  render() {
    return (
      <Html lang="en">
        <DocumentHead />
        <CssBaseline />
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <main>
            <Main />
          </main>
          <BlitzScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
