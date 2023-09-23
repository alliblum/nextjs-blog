import { Box, Center, Stack, Divider, Heading } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Center>
      <Stack>
        <Box>
          <Divider orientation="horizontal" my={20} />
        </Box>
        <Box mb={20}>
          <Heading>Placeholder for email list here</Heading>
        </Box>
      </Stack>
    </Center>
  )
}
