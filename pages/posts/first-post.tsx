import {
  Box,
  Center,
  Text,
  Image,
  Heading,
  Divider,
  Flex,
  HStack,
  Stack,
  UnorderedList,
  Spacer,
  ListItem,
} from '@chakra-ui/react'

import Link from 'next/link'

type LogoProps = {
  image: string
  alt: string
}

export const Logo = (props: LogoProps) => {
  return (
    <Box maxW={10}>
      <Image src={props.image} alt={props.alt} />
    </Box>
  )
}

export const Nav = () => {
  return (
    <Flex mx={10} my={10} justify="spacebetween" align="center">
      <Logo image={'/media/alliblum.jpeg'} alt={'photo of alli'} />
      <Spacer />
      <Box>
        <HStack fontSize="lg">
          <Link href="/">Digital Garden</Link>
          <Spacer />
          <Link href="/consulting">Consulting</Link>
          <Spacer />
          <Link href="/about">About</Link>
        </HStack>
      </Box>
    </Flex>
  )
}

export const Footer = () => {
  return (
    <Center>
      <Stack>
        <Box>
          <Divider orientation="horizontal" my={10} />
        </Box>
        <Box>
          <Heading>Ze End of Ze Post</Heading>
        </Box>
      </Stack>
    </Center>
  )
}

export default function FirstPost() {
  return (
    <>
      <Nav />

      <Center>
        <Box
          width={{
            base: '90%', // 0-48em
            sm: '400px',
            md: '600px', // 48em-80em,
            xl: '600px', // 80em+
          }}
        >
          <Spacer />
          <Stack mt={10} spacing={5}>
            <Heading as="h1">
              About this time I presented JTBD findings and nothing changed
            </Heading>

            <Text>
              This is the story of how I learned that getting* customer insights
              out of a JTBD research project and mobilizing* insights across the
              org are two completely different initiatives. A few years ago I
              ran a JTBD study, identified the job stories, & shared the output
              with the CEO who hired me.
            </Text>

            <Text>"I love this! Present it in all hands."</Text>
            <Text>
              {' '}
              I did, & everyone there seemed to "love" it, too. Emojis in the
              Zoom chat, DMs after. The works.
            </Text>

            <Text>
              And then... nothing happened. After that project presentation, few
              people consulted the recordings, the transcripts, or the
              artifacts. The research didn't make its way into other
              decision-making centers outside of the ones I was already in.
            </Text>
            <Text>
              Why did seemingly excited people do nothing with what they
              learned? Well a better question might be, what did I *want* them
              to do differently? And how did I help my colleagues make those
              changes?
            </Text>
            <Text>
              Early on I hoped that saying, "Hey here's the report" would
              precipitate:{' '}
            </Text>
            <UnorderedList>
              <ListItem>
                Replacing much of what was on the roadmap with new opportunities
              </ListItem>
              <ListItem>
                {' '}
                Getting access to data and sharing it across teams
              </ListItem>
              <ListItem>
                Re-orging team structure around the customer journey{' '}
              </ListItem>
            </UnorderedList>
            <Text>
              None of this happened and little changed because saying, "Here's a
              report, now go do stuff," won't get an entire org to build a
              customer-led mindset overnight.
            </Text>
            <Text>
              If we do research for people who have not worked with research
              before, if we present insights without guiding our colleagues on
              what to do with those insights, if we give teammates the tool of
              qualitative data but not the support to understand and apply it,
              we can expect the outcome to be limited, the insights to stay
              sequestered in someone's hard drive.{' '}
            </Text>
            <Text>
              Using insights to build a customer-led culture doesn't happen with
              research alone - it happens by re-orienting away from mobilizing
              *the insights* and instead mobilizing *the team* to believe in and
              use the insights as a guiding strategy for decision-making. And
              that is a change strategy project altogether different from
              research.
            </Text>
          </Stack>
        </Box>
      </Center>
      <Footer />
    </>
  )
}
