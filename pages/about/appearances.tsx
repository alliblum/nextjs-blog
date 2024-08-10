import { QuoteBlock } from 'components/mdx'
import Layout from 'components/layout'
import EmailForm from 'components/email-form'
import PodcastCard, { AppearanceCard } from 'components/appearance-card'

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
import App from 'pages/_app'

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
        <AppearanceCard
          NameAndHost="Marketing Powerups with Ramli John"
          Title="Alli Blum's 3 tips to get buy-in for the JTBD framework."
          Description="I joined host Ramli John to talk about ways you can lay the
            foundation for getting buy-in on doing and applying Jobs To Be
            Done research before you even ask."
          Link="https://marketingpowerups.com/podcast/alli-blum-jtbd/"
        />
        <AppearanceCard
          NameAndHost="Databox 'Metrics & Chill' podcast with Jeremiah Rizzo"
          Title="Implementing an Outcomes-Led Strategy (w/ Alli Blum, Hypothesis Department)"
          Description="I joined host Jeremiah Rizzo to talk about how I define 'Outcomes Led Growth' and how your leadership style can influence your team's ability to execute this strategy."
          Link="https://databox.com/implementing-outcomes-led-strategy"
        />
        <AppearanceCard
          NameAndHost="Copyhackers Copy School Professional with Joanna Wiebe"
          Title="How to Research Your ICP"
          Description="I did my technical training with Joanna Wiebe many years ago and was absolutely delighted to be invited back to share a lesson on how to research your ICP with an up and cohort of conversion copywriters."
        />
      </Stack>
    </Layout>
  )
}
