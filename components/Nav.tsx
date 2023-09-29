import { Box, Flex, HStack, Spacer } from '@chakra-ui/react'
import Link from 'next/link'
import { Logo } from './logo'

export const Nav = () => {
  return (
    <Flex mx={10} my={10} justify="spacebetween" align="center">
      <Logo />
      <Spacer />
      <Box>
        <HStack fontSize="lg">
          <Link href="/">Digital Garden</Link>
          <Spacer />
          <Link href="/consulting">Consulting</Link>
          <Spacer />
          <Link href="/about">About</Link>
        </HStack>
      </Box>
    </Flex>
  )
}
