import Layout from '../components/layout'
import {
  Box,
  Text,
  Heading,
  Link,
  Stack,
  UnorderedList,
  ListItem,
  Center,
} from '@chakra-ui/react'

export default function FoundersAndLeaders() {
  return (
    <Layout home>
      <Stack spacing={5}>
        <Heading size="xl">
          Get aligned and stay aligned as your company goes from startup to
          scale-up - without compromising your vision{' '}
        </Heading>
        <Text>
          <Text>
            {' '}
            I work with SaaS companies through my consulting arm, Hypothesis
            Department. I help founders and leaders build teams and products, I
            help JTBD practitioners mobilize insights, and I help leaders and
            founders build teams and products.{' '}
          </Text>
        </Text>
        <Heading size="lg">Commander's Intent</Heading>
        <Text></Text>
        <Heading size="lg">OKR Facilitation</Heading>
        <Text></Text>
        <Heading size="lg">JTBD Study and Mobilization</Heading>
        <Text></Text>
        <Heading size="lg">VUCA Workshops</Heading>
        <Text></Text>
        <Heading size="lg">Product Team Coaching</Heading>
        <Text></Text>
      </Stack>
    </Layout>
  )
}
