// pages/_document.js

import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
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
        <script>
          window.SavvyCal=window.SavvyCal||function()
          {(SavvyCal.q = SavvyCal.q || []).push(arguments)};
        </script>

        <script async src="https://embed.savvycal.com/v1/embed.js"></script>

        <script>SavvyCal('init')</script>
      </body>
    </Html>
  )
}
