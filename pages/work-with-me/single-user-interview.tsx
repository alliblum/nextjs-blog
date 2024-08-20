import Layout from 'components/layout'

import {
  Box,
  Text,
  Heading,
  Spacer,
  Link,
  Stack,
  UnorderedList,
  ListItem,
  Center,
  List,
} from '@chakra-ui/react'

import HeidiKreis from 'components/testimonials/heidi-kreis'
import JordanSkole from 'components/testimonials/jordan-skole-1'
import TJMcGinnity from 'components/testimonials/tj-mcginnity'
import RamliJohn from 'components/testimonials/ramli-john'

export default function IntroToJTBD() {
  return (
    <Layout home>
      <Stack spacing={5}>
        <Heading size="xl"></Heading>
        <Text>You’ll get: </Text>
        <UnorderedList>
          <ListItem>One user interview with one of your best users </ListItem>
          <ListItem>
            Answers to questions around your user’s journey, from the first
            moment they realized they had a problem your product could help with
            to the a-ha moment when they got what they wanted from yours
          </ListItem>

          <ListItem>
            An hour’s worth of juicy voice-of-customer data you can use to ship
            outcome-generating features, targeted marketing campaigns, and
            fast-closing sales loops{' '}
          </ListItem>
          <ListItem>
            {' '}
            A 1-page analysis of your interview outlining that single
            customers's job story{' '}
          </ListItem>
          <ListItem>
            Opportunity to ask me questions about user research and your
            customer interview in a 1-hour deep dive with me after you listen to
            your interivew
          </ListItem>
        </UnorderedList>
        <UnorderedList>
          <ListItem>
            <Text as="strong">Interview recording: </Text>I’ll interview a
            customer to uncover their timeline to value, a-ha moment, and
            potential reservations so you can apply those findings to your
            product led strategy.
          </ListItem>
          <ListItem>
            <Text as="strong">Transcript:</Text> You’ll get the transcription of
            our call so you and your team can read and analyze the Voice of
            Customer data to use in your landing page, marketing emails,
            onboarding emails, and more.
          </ListItem>
          <ListItem>
            <Text as="strong">1-Page Findings Analysis:</Text> You’ll get a
            high-level debrief of key insights.
          </ListItem>
          <ListItem>
            <Text as="strong">1 Hour Review Call:</Text> We’ll meet for an hour
            for you to discuss your findings.
          </ListItem>
          <ListItem>
            <Text as="strong">Incentive management:</Text> I’ll handle the
            provisioning of an Amazon gift card as an incentive for your
            participants to share their experiences in
          </ListItem>
        </UnorderedList>
        <Text></Text>
        <RamliJohn />
      </Stack>
    </Layout>
  )
}
