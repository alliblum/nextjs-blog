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
          Description="I did my technical training with Joanna Wiebe many years ago. I was absolutely delighted to be invited back to share a lesson on how to research your ICP with an up and cohort of conversion copywriters."
        />
        <AppearanceCard
          NameAndHost='"Better Done Than Perfect" with Jane Portman'
          Title="Switch Interviews and Strategic Context with Alli Blum"
          Description="Jane and I had a wide-reaching conversation on how to apply Jobs To Be Done interviews to SaaS onboarding."
          Link="https://userlist.com/podcast/switch-interviews-strategic-context-with-alli-blum/"
        />
        <AppearanceCard
          NameAndHost="MicroConf"
          Title="The Root of the Retention Problem: How to Get Qualitative Data You Need to Stop Churn"
          Description="An oldie but a goodie: covering the basics of voice of customer data, how to get it, and what to do with it once you have it."
          Link="https://microconf.com/speakers/alli-blum"
          ButtonText="Watch Now"
        />
        <AppearanceCard
          NameAndHost="EnjoyHQ webinar hosted by Sofia Quintero"
          Title="The Secrets to Successful Repository Adoption"
          Description="I worked with Sofia to help over 50 teams mobilize their qualitative reserach repository across their organization. In this webinar I shared some of the best buy-in techniques I learned along the way. "
          Link="https://www.youtube.com/watch?v=16wVU5cTbpI"
          ButtonText="Watch Now"
        />
        <AppearanceCard
          NameAndHost="Forget the Funnel with Georgiana Laudi and Claire Suellentrop"
          Title="How SaaS Marketers Can Get Buy-In on Qualitative Research Projects"
          Description="How to reframe research to overcome stakeholder objections to VOC - and build a buy-in machine so you don't need to fight for it again."
          Link="https://forgetthefunnel.com/resources/getting-saas-customer-research-buy-in"
          ButtonText="Watch Now"
        />
        <AppearanceCard
          NameAndHost="MicroConf"
          Title="Putting the onboarding cart before the product horse"
          Description="An oldie but a goodie: This is one of my favorite talks about how thinking about onboarding is a proxy for thinking about product, even if you're just getting started."
          Link="https://microconf.com/speakers/alli-blum"
          ButtonText="Watch Now"
        />
      </Stack>
    </Layout>
  )
}
