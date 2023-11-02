import Layout from '../components/layout'
import { Box, Text, Heading, Link } from '@chakra-ui/react'

export default function JTBDPractitioners() {
  return (
    <Layout home>
      <Box>
        <Heading>About</Heading>
        <Text>i put a bio here</Text>

        <Link
          color="purple.700"
          as="strong"
          href="https://savvycal.com/alli/c0518466"
        >
          Schedule time with me
        </Link>
      </Box>
    </Layout>
  )
}
