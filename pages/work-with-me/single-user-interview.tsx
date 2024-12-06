import Layout from 'components/layout'
import Link from 'next/link'

// import { colorPalettes } from 'compositions/lib/color-palettes'
// import { Button } from '@/components/ui/button'

import {
  Box,
  Text,
  Heading,
  Spacer,
  Button,
  // Link,
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
import { truncate } from 'fs'
// import Offer from 'components/mdx/offer'

export default function SingleUserInterview() {
  return (
    <Layout home>
      <Stack spacing={5}>
        <Heading size="xl">Single User Research Interview</Heading>
        <Heading size="lg">
          They always say "talk to your customers" but what does that really
          mean?{' '}
        </Heading>
        <Text>
          Maybe you've talked with customers yourself and walked away with no
          more insight than before you had the conversation. Or worse: maybe you
          applied findings from a user interview only to find they backfired.
        </Text>
        <Text>What went wrong?</Text>
        <Text>
          I blame user researchers like me for dishing out overly simplified and
          hard-to-follow advice. We distilled an entire field and all its nuance
          into a short 4-word command to "talk to your customers" that offers as
          much practical advice about how to actually follow that command as
          other shorthand commands like "learn to code" or "charge more" or
          "fold in the cheese."
        </Text>
        <Text>
          Which leads many well-intentioned founders to ignore user research
          altogether and build off what your gut says, what investors demand, or
          what you hear about piecemeal from randos online. You end up with a
          product that grows somewhat, somehow, but never enough.
        </Text>
        <Text>
          Or worse - this advice leads you to run interviews that actively lead
          you astray. Without knowing what "good" looks like, you risk asking
          questions that give you a faulty understanding of what your best
          prospects and customers want. You end up building your entire str
        </Text>
        ategy on lies customers told you to be nice or because they genuinely
        believed it at the time.
        <Text>Not anymore.</Text>
        <Heading size="lg">
          Get your first real taste of valid actionable user research that you
          can apply directly to your business - without signing on for a giant
          project
        </Heading>
        <Text>
          With this single user interview project, you stay on a different path:
          the path of valid, actionable data delivered in a bite size chunk.{' '}
        </Text>
        <Text>
          A project just big enough to help you understand what research is,
          what kind of data you can get out of it, and how it can help you stop
          guessing and start knowing what makes customers buy from you.{' '}
        </Text>
        <Text>
          A project just small enough that you don't have to worry about fitting
          a giant project into an already busy project roadmap, about getting an
          entire team onboard with a new strategy, or about making a large
          investment in a full-size research project that you might not be ready
          for. Not yet, anyway.
        </Text>
        <Stack my={5}>
          <RamliJohn />
        </Stack>
        <Heading size="lg">Here's what you can expect:</Heading>
        <Text>
          After we meet to talk about the questions stopping your business from
          growing, I'll prep, run, and share an interview with a customer. This
          small scale project helps you sit with an interview to understand what
          "talk to your customers" really means.
        </Text>
        <Text>
          You'll get to hear an interview that introduces you to actionable core
          concepts in user research, including:
        </Text>
        <UnorderedList>
          <ListItem>
            The Timeline and why it's so important to understand what happens
            before your customers purchase
          </ListItem>
          <ListItem>
            The Forces within and outside of your control that either push
            customers to purchase or stop them in their tracks
          </ListItem>
          <ListItem>
            The Social, Emotional, and Functional components of the progress
            your customer wants your product to help them make
          </ListItem>
          <ListItem>
            The Gaps in where your product is now and where your customer wants
            it to be that you can apply to your sales, marketing, and product
            roadmap.
          </ListItem>
        </UnorderedList>
        <Text>This package includes:</Text>
        <UnorderedList>
          <ListItem>
            {' '}
            1 60-minute call with me so I can learn about your business and what
            unanswered questions are holding you back from reaching your growth
            goals
          </ListItem>
          <ListItem>
            {' '}
            Recording and transcript for 1 user research interview conducted by
            me that gives you a glimpse into the struggling moments your
            customer faced as they bought and started using your product{' '}
          </ListItem>
          <ListItem>
            {' '}
            1 page analysis of key takeaways and hypotheses around how to turn
            insights into outcomes
          </ListItem>
          <ListItem>
            {' '}
            A second 60-minute call with me to talk through findings and answer
            additional questions about how to apply what you've found
          </ListItem>
        </UnorderedList>
        <Text>
          {' '}
          A single interview likely won't be enough for you to form your entire
          strategy. But with this small taste, you'll familiarize yourself with
          how to understand and apply user research so that you are fully
          prepared to build a customer-centric strategy with more interviews in
          the future.
        </Text>
        <Heading size="lg">
          Why choose Alli to run your single research interview?
        </Heading>
        <UnorderedList>
          <ListItem>
            I’ve used research to drive growth while working in product, growth,
            ux, marketing, and engineering for companies like MURAL, EnjoyHQ,
            Atlassian, Codecademy, and Autobooks.
          </ListItem>
          <ListItem>
            I’m a Fractional Head of Product with 10x and 0-1 experience who
            knows research isn’t about “research,” it’s about solving problems
            that help your customers make progress and help your business drive
            outcomes
          </ListItem>
          <ListItem>
            I’ve trained hundreds of people on how to use, understand, mobilize,
            and apply user research to their growth strategies
          </ListItem>
        </UnorderedList>
        <Stack my={5}>
          <HeidiKreis />
        </Stack>
        <Heading size="lg">
          Get started with your single research interview today 👇{' '}
        </Heading>
        <Button
          variant="outline"
          border="2px"
          borderColor="black"
          shadow="lg"
          size="lg"
          p="10"
        >
          <Link href="https://app.paperbell.com/checkout/packages/104213">
            <Text>Book a time with me</Text>
          </Link>
        </Button>
      </Stack>
    </Layout>
  )
}
