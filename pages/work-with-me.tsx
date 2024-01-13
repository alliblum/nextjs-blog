import Layout from '../components/layout'
import Offer from '../components/mdx/offer'
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

export default function WorkWithMe() {
  return (
    <Layout home>
      <Stack spacing={5}>
        <Heading size="xl">
          Get aligned and stay aligned as your company goes from startup to
          scale-up - without compromising your vision{' '}
        </Heading>

        <Text>
          Over the last 10 years I've had the great privilege to work and learn
          with a great many teams. I love joining companies who have just
          started to discover the champagne problem of having so many
          opportunities they don't know which one offers the best path forward.{' '}
        </Text>

        <Offer
          title="Commander's Intent"
          subtitle="One-on-one coaching for visionary founders"
          description="How will you distill your grand vision for the future into a single
            clear directive."
        ></Offer>

        <Stack>
          <Heading size="lg">Commander's Intent</Heading>
          <Text as="i">One-on-one coaching for visionary founders</Text>
          <Text>
            How will you distill your grand vision for the future into a single
            clear directive.
          </Text>
        </Stack>
        <Text></Text>
        <Heading size="lg">OKR Facilitation</Heading>
        <Text as="i">Group coaching for leadership teams</Text>
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
