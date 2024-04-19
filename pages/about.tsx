import { QuoteBlock } from 'components/mdx'
import Layout from 'components/layout'

import {
  Box,
  Text,
  Heading,
  Spacer,
  Image,
  Link,
  Stack,
  UnorderedList,
  ListItem,
  Center,
  List,
} from '@chakra-ui/react'

export default function About() {
  return (
    <Layout home>
      <Stack spacing={5}>
        <Heading size="xl">Hi, I’m Alli. </Heading>
        <Text>
          I help SaaS companies break through growth plateaus and launch new
          innovations.
        </Text>

        <Text>
          I’ve spent the last 10+ years working with 50+ companies figuring out
          how software companies launch and scale by winding my way through the
          many functions and departments that drive growth at mega-hits like
          MURAL, EnjoyHQ, Atlassian and indie companies like Stunning, Userlist,
          and TinySeed companies.{' '}
        </Text>

        <Text>
          I'm a jack of all trades with tours across functions including
          leadership, product, growth, UX, user research, marketing, conversion
          copywriting, GTM planning, leadership, operations, customer support,
          positioning, public relations, change management, and engineering.{' '}
        </Text>

        <Text>
          {' '}
          I especially love working with conscious, empathetic leaders and
          founders who are rigorous in their pursuit of the root causes of
          problems and focused on building solutions in the future of work and
          calm technology.{' '}
        </Text>

        <Image
          py={5}
          src="/media/logobar.png"
          alt="image of logos Alli has worked with, including MURAL, Atlassian, Stunning, EnjoyHQ, Codecademy, Output, Userlist, TinySeed, and Autobooks."
        />
        <Heading size="lg">
          How I approach consulting and fractional work
        </Heading>
        <Text>Co-creative</Text>
      </Stack>
    </Layout>
  )
}
