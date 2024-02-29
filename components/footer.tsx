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
          <Stack direction="row">
            <Link href="/terms-and-conditions">Terms and Conditions</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </Stack>
        </Box>
      </Stack>
    </Center>
  )
}
