import { Box, Text } from '@chakra-ui/react'

import Link from 'next/link'

export default function Consulting() {
  return (
    <Box>
      <Text>Consulting</Text>
      <Link href="/writing">Writing</Link>
    </Box>
  )
}
