import Layout from '../components/layout'
import { Box, Text, Heading, Link } from '@chakra-ui/react'

export default function JTBDPractitioners() {
  return (
    <Layout home>
      <Box>
        <Heading>About</Heading>
        <Text>i put a bio here</Text>

        <Link href="https://savvycal.com/alli/c0518466">
          <Text as="strong" color="purple.700">
            Schedule time with me
          </Text>
        </Link>
      </Box>
    </Layout>
  )
}
