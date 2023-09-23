import React from 'react'
import { Nav } from './Nav'
import { Footer } from './Footer'
import Head from 'next/head'
// import Link from 'next/link'
import { Box, Center, Stack, Spacer } from '@chakra-ui/react'

// const name = 'Alli Blum'
export const siteTitle = "Alli Blum's | Head of Product for Hire"

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <meta name="description" content="Get buy-in on your vision" />

      <div>
        <Nav />
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
              {children}
            </Stack>
          </Box>
        </Center>
        <Footer />
      </div>
    </>
  )
}
