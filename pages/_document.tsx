// pages/_document.js

import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { theme } from './_app'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* 👇 Here's the script */}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />

        <Script async src="https://embed.savvycal.com/v1/embed.js"></Script>
      </body>
    </Html>
  )
}
