import { QuoteBlock } from 'components/mdx'
import Layout from 'components/layout'
import EmailForm from 'components/email-form'

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
        <Card>
          <CardBody>
            <Stack>
              <Heading size="md">
                Marketing Powerups hosted by Ramli John
              </Heading>
              <Text fontStyle="italic">
                Alli Blum's 3 tips to get buy-in for the JTBD framework.
              </Text>
              <Text>
                I joined host Ramli John to talk about ways you can lay the
                foundation for getting buy-in on doing and applying Jobs To Be
                Done research before you even ask.{' '}
              </Text>
              <Center>
                <Image
                  src="/images/podcasts/Podcast.MarketingPowerups.png"
                  alt="Screenshot of 4 power-ups on getting buy-in on JTBD"
                  width={600}
                  height={400}
                />
              </Center>
              <Button colorScheme="purple" size="md" mx={40} my={5}>
                Listen now
              </Button>
            </Stack>
          </CardBody>
        </Card>
      </Stack>
    </Layout>
  )
}
