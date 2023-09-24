import React from 'react'
import { Nav } from './Nav'
import { Footer } from './footer'
import Head from 'next/head'
import styles from './layout.module.css'
// import utilStyles from '../styles/utils.module.css'
// import Link from 'next/link'
import { Box, Center, Stack, Spacer, Heading } from '@chakra-ui/react'

// const name = 'Alli Blum'
export const siteTitle = 'Alli Blum'

export default function Layout({
  children,
}: // home,
{
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="favicon.ico" />
        <meta name="description" content="Get buy-in on your vision" />
      </Head>
      <header>
        <Nav />
      </header>

      <Center>
        <Box
          width={{
            base: '90%', // 0-48em
            sm: '400px',
            md: '600px', // 48em-80em,
            xl: '600px', // 80em+
          }}
        >
          <Spacer />

          <Stack mt={10} spacing={5}>
            <Heading>TEXT</Heading>

            <main>{children}</main>
          </Stack>
        </Box>
      </Center>
      <Footer />
    </div>
  )
}
