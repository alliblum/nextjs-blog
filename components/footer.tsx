import { Box, Center, Stack, Divider, Heading } from '@chakra-ui/react'
import Link from 'next/link'

export const Footer = () => {
  return (
    <Center>
      <Stack>
        <Box>
          <Divider orientation="horizontal" my={20} />
        </Box>
        <Box mb={15}>
          <Link href="/pages/terms-and-conditions">Terms and Conditions</Link>
        </Box>
      </Stack>
    </Center>
  )
}
