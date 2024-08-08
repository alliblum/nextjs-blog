import { QuoteBlock } from 'components/mdx'
import Layout from 'components/layout'
import EmailForm from 'components/email-form'

import Image from 'next/image'

import {
  Box,
  Text,
  Heading,
  Spacer,
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

export default function Appearances() {
  return (
    <Layout home>
      <Stack spacing={5}>
        <Heading size="lg">
          What a great privilege to join smart folks to talk about mobilizing
          customer insights
        </Heading>
        <Card>
          <CardBody>
            <Stack>
              <Heading size="sm">
                Marketing Powerups hosted by Ramli John
              </Heading>
              <Text>
                Alli Blum's 3 tips to get buy-in for the JTBD framework.
              </Text>
              <Image
                src="/images/Podcast.MarketingPowerup"
                alt="Screenshot of 4 power-ups on getting buy-in on JTBD"
                width={400}
                height={400}
              />
            </Stack>
          </CardBody>
        </Card>
      </Stack>
    </Layout>
  )
}
