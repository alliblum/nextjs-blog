import { Headshot } from './headshot'
import { Box, Flex, HStack, Spacer } from '@chakra-ui/react'
import Link from 'next/link'

export const NavBar = () => {
  return (
    <Flex mx={2} my={10} justify="spacebetween" align="center">
      <Headshot />
      <Spacer />
      <Box>
        {/* <HStack fontSize="sm">
          <Link href="/founders-and-leaders">For Founders and Leaders</Link>
          <Spacer />
          <Link href="/jtbd-practitioners">For JTBD Practitioners</Link>
        </HStack> */}
      </Box>
    </Flex>
  )
}
