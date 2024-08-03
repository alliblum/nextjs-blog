import { Headshot } from './headshot'
import { Box, Flex, HStack, Spacer, Stack } from '@chakra-ui/react'
import Link from 'next/link'

export const NavBar = () => {
  return (
    <Flex mx={2} my={10} justify="spacebetween" align="center">
      <Headshot />

      <Box pl={8}>
        <Stack as="strong" textAlign="right" direction="column" spacing={4}>
          <Link href="/research-buy-in">
            Free Email Course: Get Buy-In on VOC
          </Link>
          <Link href="/work-with-me">Work With Me</Link>

          {/* <Link href="/about">About</Link> */}
        </Stack>
      </Box>
    </Flex>
  )
}
