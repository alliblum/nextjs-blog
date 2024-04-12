import { Headshot } from './headshot'
import { Box, Flex, HStack, Spacer, Stack } from '@chakra-ui/react'
import Link from 'next/link'

export const NavBar = () => {
  return (
    <Flex mx={2} my={10} justify="spacebetween" align="center">
      <Headshot />
      <Spacer />
      <Box>
        <Stack direction="row" spacing={4}>
          <Link href="/work-with-me">Work With Me</Link>
          <Link href="/about">About</Link>
        </Stack>
      </Box>
    </Flex>
  )
}
