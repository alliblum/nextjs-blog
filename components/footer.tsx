import { Box, Center, Stack, Divider, Heading } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Center>
      <Stack>
        <Box>
          <Divider orientation="horizontal" my={20} />
        </Box>
        <Box mb={15}></Box>
      </Stack>
    </Center>
  )
}
