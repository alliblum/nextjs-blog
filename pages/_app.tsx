// import styles from './layout.module.css'
import '../styles/global.css'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { MDXComponents } from './mdxcomponents'
// import { MDXProvider } from '@mdx-js/react'
// import { MDXComponents } from 'mdx/types'

export const theme = extendTheme({
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: ['48px', '72px'],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-2%',
    },
    h2: {
      fontSize: ['36px', '48px'],
      fontWeight: 'semibold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
    text: {},
  },
})

// 3. Pass the `theme` prop to the `ChakraProvider`
export default function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <h1>{isClient ? '' : 'Prerendered'}</h1>
      {/* <h1>{isClient ? 'This is never prerendered' : 'Prerendered'}</h1> */}
    </ChakraProvider>
  )
}

// function MyApp({ Component, pageProps }) {
//   return (
//     <ChakraProvider>
//       <Component {...pageProps} />
//     </ChakraProvider>
//   )
// }

// export default MyApp;
