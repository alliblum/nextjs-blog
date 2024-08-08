import { QuoteBlock } from 'components/mdx'
import Layout from 'components/layout'
import EmailForm from 'components/email-form'
import PodcastCard from 'components/podcastcard'

import Image from 'next/image'

import {
  Box,
  Text,
  Heading,
  Spacer,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
  Stack,
  UnorderedList,
  ListItem,
  Center,
  List,
  OrderedList,
} from '@chakra-ui/react'
import { max } from 'date-fns'
import { inherits } from 'util'

export default function Appearances() {
  return (
    <Layout home>
      <Stack spacing={5}>
        <Heading size="lg">
          What a great privilege to join smart folks to talk about mobilizing
          customer insights
        </Heading>
        <Text>
          I hope you have as much fun listening to these episodes as I had
          recording them.
        </Text>
        <PodcastCard
          NameAndHost="Marketing Powerups with Ramli John"
          EpisodeTitle="Alli Blum's 3 tips to get buy-in for the JTBD framework."
          EpisodeDescription="I joined host Ramli John to talk about ways you can lay the
            foundation for getting buy-in on doing and applying Jobs To Be
            Done research before you even ask."
          //   EpisodeArt={{
          //     src: '/images/podcasts/Podcast.MarketingPowerups.png',
          //     alt: 'Screenshot of 4 power-ups on getting buy-in on JTBD',
          //     width: 600,
          //     height: 400,
          //   }}
          EpisodeLink="https://marketingpowerups.com/podcast/alli-blum-jtbd/"
        />
        <PodcastCard
          NameAndHost="Databox 'Metrics & Chill' podcast with Jeremiah Rizzo"
          EpisodeTitle="Implementing an Outcomes-Led Strategy (w/ Alli Blum, Hypothesis Department)"
          EpisodeDescription="I joined host Jeremiah Rizzo to talk about how I define 'Outcomes Led Growth' and how your leadership style can influence your team's ability to execute this strategy."
          //   EpisodeArt={{
          //     src: '/images/podcasts/Podcast.MetricsAndChill.png',
          //     alt: 'Screenshot of a Databox podcast episode bar with logo and play icon',
          //     width: 600,
          //     height: 400,
          //   }}
          EpisodeLink="https://databox.com/implementing-outcomes-led-strategy"
        />
      </Stack>
    </Layout>
  )
}
