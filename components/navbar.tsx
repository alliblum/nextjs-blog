import { Headshot } from './headshot'
import { Box, Flex, HStack, Spacer, Stack } from '@chakra-ui/react'
import Link from 'next/link'

export const NavBar = () => {
  return (
    <Flex mx={2} my={10} justify="spacebetween" align="center">
      <Headshot />
      <Spacer />
      <Box>
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

export const MobileNavBar = () => {
  return (
    <Stack p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
      <MobileNavItem key={navItem.label} {...navItem}/>))}
      </Stack>
  )
