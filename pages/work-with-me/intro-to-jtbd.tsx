import { QuoteBlock } from 'components/mdx'
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
import JordanSkole from 'components/testimonials/jordan-skole'
import TJMcGinnity from 'components/testimonials/tj-mcginnity'

export default function IntroToJTBD() {
  return (
    <Layout home>
      <Stack spacing={5}>
        <Heading size="xl">Workshop: Is JTBD right for your team?</Heading>
        <Text>
          So you've heard a lot about Jobs To Be Done. You saw a great
          conference talk or read "Competing Against Luck". Maybe you've even
          tried your hand at a few customer interviews.
        </Text>
        <Text>
          Or you've seen JTBD's impact at another organization, even if you
          weren't the main person to run the project. You saw how it transformed
          a scattered set of decisions into a clear strategy, how it turned a
          team of grumpy product people and sour-faced marketers into a united
          front of energized outcome-generating operators. You even got to see
          those growth numbers go up soon after.
        </Text>
        <Text>
          Either way: when you look at the challenges your organization is
          facing -- misalignment of who your customer is, scattered priorities
          on what's important to build now, a stubborn growth plateau with
          multi-functional origins -- it sure seems like JTBD will give you the
          insights you need to break the logjam.
        </Text>
        <Text>And yet.</Text>
        <Heading size="sm">If you're new to JTBD, you may wonder:</Heading>
        <UnorderedList>
          <ListItem>What exactly IS JTBD?</ListItem>
          <ListItem>How will your team apply your findings?</ListItem>
          <ListItem>
            How is it different from other projects to understand our customers,
            like user personas?
          </ListItem>
          <ListItem>What does an interview look and sound like?</ListItem>
          <ListItem>
            What kind of deliverables can you expect at the end of a JTBD
            project?
          </ListItem>
          <ListItem>How do the insights translate into action? </ListItem>
          <ListItem>
            Is it really as powerful as JTBD people say it is?
          </ListItem>
        </UnorderedList>
        <Heading size="sm">
          If you've already seen JTBD work well, you may wonder:
        </Heading>
        <UnorderedList>
          <ListItem>
            How on earth am I going to get my peers bought into a concept
            they've never heard of before?
          </ListItem>
          <ListItem>How will I win over skeptics and build allies?</ListItem>
          <ListItem>
            How am I going to get folks to actually be excited about doing a
            JTBD project?
          </ListItem>
        </UnorderedList>
        <Heading size="lg">
          This workshop gives your team a taste of JTBD so you can decide if
          investing in a full JTBD Growth & Change project is the right choice
          to break through your growth plateau{' '}
        </Heading>
        <Heading size="lg">
          How we get you and your team leveled up on Jobs To Be Done in a single
          day:
        </Heading>
        <Text>
          {' '}
          First you and I will meet to talk about your business. You'll tell me
          what you know about your most successful customers and we'll come up
          with a list of folks we can reach out to for an interview. I'll run a
          JTBD interview with one of the customers who meets our criteria.{' '}
        </Text>
        <Text>Then on the day of our workshop we'll cover 4 parts:</Text>
        <Text>
          <Text as="strong">Intro to JTBD:</Text> What it is, how it works, how
          it's different from other theories of growth and innovation and other
          ways of mapping your customers' journey.{' '}
        </Text>
        <Text>
          <Text as="strong">Listen to your first JTBD interview: </Text>We'll
          listen to the interview that I conducted in advance of the training
          independently.{' '}
        </Text>
        <Text>
          <Text as="strong">Discover your first Job Story:</Text> We'll rejoin
          to talk about what we heard, share our findings around the four
          forces, social, emotional, and functional components, and the "Pixar"
          story.{' '}
        </Text>
        <Text>
          {' '}
          <Text as="strong">JTBD Application Lightning Round:</Text> We'll talk
          about how we might apply our findings from this interview to different
          areas of your business, including product, marketing, product
          marketing, customer success, positioning, messaging, and more.{' '}
        </Text>
        <Heading size="lg">
          {' '}
          You'll go from wondering if JTBD is right for you to:
        </Heading>
        <UnorderedList>
          <ListItem>
            Getting your entire team aligned around what JTBD is
          </ListItem>
          <ListItem>
            Hearing a JTBD interview with a real customer with your own ears
          </ListItem>
          <ListItem>
            Getting to really "feel" how you might apply JTBD findings at your
            org
          </ListItem>
          <ListItem>
            {' '}
            Having an understanding of the core tenets of JTBD, including the 4
            forces, the "Pixar" story, and social/functional/emotional
            components{' '}
          </ListItem>
          <ListItem>
            Having easier conversations with your team around allocating budget
            for and applying insights because everyone will have seen how it
            applies to their discipline{' '}
          </ListItem>
          <ListItem>
            Having an easier time booking a proper project to understand all of
            your jobs
          </ListItem>{' '}
        </UnorderedList>
        <Heading size="md"> What you won't get:</Heading>
        <UnorderedList>
          {' '}
          <ListItem>
            {' '}
            A full understanding of your customers JTBD - you'll need *at least*
            10 interviews{' '}
          </ListItem>
          <ListItem>A fully transformed organization</ListItem>
          <ListItem>
            Expert-level dexterity to collect and apply your own JTBD findings
            (but you'll be well on your way to becoming one)
          </ListItem>
        </UnorderedList>{' '}
        <Heading size="md">So if you:</Heading>
        <UnorderedList>
          <ListItem>
            Are thinking about JTBD but not ready to commit to a full project
          </ListItem>
          <ListItem>
            Need a way to get your team to see and feel for themselves how
            impactful a JTBD project could be{' '}
          </ListItem>
          <ListItem>
            Want to see what all the fuss is about with some real live customer
            data
          </ListItem>
          <ListItem>Have at least 100 active paying customers</ListItem>
        </UnorderedList>
        <Center my="10">
          <Link href="https://savvycal.com/alli/c0518466">
            <Heading size="lg" color="purple.600" as="strong">
              Book an intro call
            </Heading>
          </Link>
        </Center>
        <HeidiKreis />
        <TJMcGinnity />
        <JordanSkole />
        {/* <QuoteBlock
          quote="During the training I learned that JTBD is a lot more
        objective than I thought. I learned how the interviews are conducted and
        the process it takes to turn those interviews into copy and other
        marketing resources. I was able to learn about some of the more common
        challenges that businesses run into. What I learned here helps me better
        understand our mission and who we serve. It gave me a ton of insights
        and improved confidence into how we deliver our messaging."
          author="Levi Yeck,
        Director of Sales, Autobooks"
        /> */}
        {/* <QuoteBlock
          quote="I had heard the term 'Job' thrown around but I never really knew
        exactly what that meant. I had watched a new hire video on Jobs and had
        several conversations with people that brought it up. This training
        helped my understanding TREMENDOUSLY! It makes so much sense now. Also,
        learning about the 4 quadrants of a Job (push, pull, habit, anxiety) was
        great. The training gives us insight and understanding into who are
        customers are and why they need us."
          author="Jeff Nessler, Hubspot Platform
        Lead, Humana"
        />
       
        <QuoteBlock
          quote="Alli never lets a comment go by
        unquestioned. Sometimes we use filler words to just get to the end of
        our own comment. Alli wont let it happen. She will say wait what do you
        mean by that last part? People would always say, well I guess not that.
        What I really meant was this. She keeps people from autopiloting through
        the training, keeps us all thoughtful and engaged throughout the
        training."
          author="Levi Yeck, Director of Sales, Autobooks"
        />{' '} */}
        {/* <QuoteBlock
          quote="Alli was also super good at encouraging and helping me
        feel successful learning and applying something new. She asked really
        great questions that forced me to think about why I was responding the
        way I did - that inductive reasoning piece. She was really great at
        listening and then following up with further questions. She was really
        good at encouraging questions, taking them seriously, responding to
        them, and making sure we understood."
          author="Heidi Kreis, Research and
        Strategic Lead, Forget the Funnel"
        /> */}
      </Stack>
    </Layout>
  )
}
