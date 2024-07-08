import Head from 'next/head'
import {
  Heading,
  Container,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Spacer,
  Text,
  Icon,
  Link,
  Button,
  chakra,
  UnorderedList,
  ListItem,
  Image,
} from '@chakra-ui/react'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import NextLink from 'next/link'
// import Image from 'next/image'

import { TbBulb } from 'react-icons/tb'

import { GetStaticProps } from 'next'
// import { Box, Heading, Text, Spacer } from '@chakra-ui/react'
// import theme from './_app'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <section className={utilStyles.headingMd}> */}
      <Stack spacing={5}>
        <Heading>
          I used to be terrible at getting buy-in for customer research.
        </Heading>
        <Text>
          I remember walking into my downtown loft converted warehouse office
          with a huge smile on my face. With the tenor of someone who was about
          to change the entire company’s growth trajectory, I’d boast:
        </Text>
        <Text>
          "Hi! I'm Alli and we don't understand customers as well as we should!
          We should totally do customer research!"
        </Text>
        <Text>
          Would you believe this wildly convincing and self-aware sales pitch
          didn’t work?!
        </Text>
        <Text>
          For a while I grumbled and blamed everyone else for not seeing my
          brilliance.
        </Text>
        <Text>"Their loss! Guess they just don't like making money!</Text>
        <Text>
          But after a while I started to see that grumbling didn't help me. And
          I decided to do something about it. I decided to figure out how to get
          good a getting research AND at getting other people to see its value.
        </Text>
        <Text>And since I made that shift, I have:</Text>
        <UnorderedList>
          <ListItem>
            Get buy-in for using JTBD in onboarding strategies that led to
            triple-digit increases in performance
          </ListItem>
          <ListItem>
            Coached over 50 people on how to set up their qualitative research
            repositories AND get other team members actually using the data
            stored inside
          </ListItem>
          I’ve used research to drive growth while working in product, growth,
          <ListItem>
            Launched a 0-1 product in a highly regulated industry in the face of
            deep internal resistance from folks who said that these customers
            "preferred spreadsheets" and "would never use an app"
          </ListItem>
          <ListItem>
            Sourced and applied VOC data for projects led sales, product,
            marketing, customer success, and even engineering teams.
          </ListItem>
          <ListItem>
            Learned ways of playing organizational politics that are nothing
            like the "manipulate and screw people over" games I used to fear and
            more like a game of "making friends and helping people"
          </ListItem>
          <ListItem>
            Helped teams avert multi-million dollar mistakes in a single meeting
          </ListItem>
          <ListItem>
            Gotten not only buy-in, but enthusiasm and excitement and resources
            for just about every project I've worked on, even my most
            controversial ones{' '}
          </ListItem>
        </UnorderedList>
        <Heading size="md">
          Now I help software product, marketing, sales, and even engineering
          leaders get the insights to make decisions and the buy-in to get them
          done
        </Heading>
        <Image
          py={5}
          src="/media/logobar.png"
          alt="image of logos Alli has worked with, including MURAL, Atlassian, Stunning, EnjoyHQ, Codecademy, Output, Userlist, TinySeed, and Autobooks."
        />
        {/* <Heading size="lg">
          Part of what makes me unique: I'm a Jill of All Trades
        </Heading>
        <Text>
          I spent the last decade working in just about every department in a
          software company.
        </Text>
        <Text>
          I started in PR, which is where I learned how to build alignment and
          messaging strategies.
        </Text>
        <Text>
          I worked in content marketing, which is where I learned how to
          research customers and build materials that help people make progress
          before they're ready to buy.
        </Text>
        <Text>
          I wanted to get closer to the sale, so I learned conversion
          copywriting. This is where I learned even more rigorous customer
          research and how to combine them with the foundations of building
          sales messages, of how people decide to buy, and how to turn readers
          into buyers with a few customer interview transcripts, my keyboard,
          and amazing training on knowing which framework to use in which
          scenario.
        </Text>
        <Text>
          I got frustrated only being able to invite people to do something and
          not being able to help people do a thing, so I moved into UX. I built
          comprehensive onboarding strategies that used both the onboarding
          emails I learned with my conversion copy skills with in-app designs.
        </Text>
        <Text>
          I wanted even more of a say in how products are built, in how we
          choose to design one feature vs another, so I moved into product
          strategy and management.
        </Text>
        <Text>
          I realized I'd never be able to build the software product of my
          dreams if I did it all alone, so I moved into product leadership where
          I learned how to train and align a team around a product strategy in
          both established and 0-1 playspaces.
        </Text>
        <Text>
          I grew tired of thinking that engineering was magic, that engineers
          were magicians, that they possessed a secret power I didn't have. So I
          learned some of the basics of engineering. Enough to code this site,
          enough that my code is in production on apps, enough to know that
          engineers often get left out of customer conversations by others'
          exclusion or their own choice - and that this oversight is among the
          most significant opportunities for many companies.
        </Text>
        <Heading size="lg">Why pursue this winding path?</Heading>
        <Text>
          Depending on when you asked me, I would have told you I had different
          motivations for why I pursued so many different disciplines.
        </Text>
        <Text>
          For a while I wanted to get closer to the action so I could "prove" my
          "worth". The time scales for PR and content marketing are long,
          showing the impact of any single piece was challenging, showing the
          impact of a broad campaign was close to immeasurable. Or at least,
          that's what it felt like to me at the time when I saw folks writing
          about how a single email sequence generated 300% increase in upgrades.
        </Text>
        <Text>
          Then there was a time when I just fell in love with learning. When I
          discovered Jobs To Be Done, I felt like someone came into my brain and
          put signs up by the parts that were doing different types of
          JTBD-esque analysis. It's hard to explain how natural JTBD felt as a
          framework for the work I was already naturally doing. It feels
          egotistical and probably likely to invite ire to say "I was doing JTBD
          research before I knew what it was called" but it's not that far off.
          JTBD gave me guardrails to tighten work I was already doing, confirmed
          a sense that my gut was right after all.
        </Text>
        <Text>
          But as excited as I was to have found JTBD, I was just as confused to
          find that the only route to getting other folks excited was riding the
          struggle bus.
        </Text>
        <Text>
          I worked with the EnjoyHQ team to onboard new users to their customer
          research repositories and found that, to a tee, every researcher was
          struggling with both the functional mechanics of mobilizing insights
          across an org and the emotional defeat of not getting buy-in from
          their colleagues.
        </Text>
        <Heading size="lg">How strange.</Heading>{' '}
        <Heading size="lg">
          Here lies a secret code to long term sustainable growth, happy
          customers, and happy employees. And no one wants it.{' '}
        </Heading>
        <Heading size="lg">WTF, mate.</Heading>
        <Text>
          That's around the time I started to accept that if I wanted to get
          good at getting buy-in on customer research, then I needed to get good
          at change management. Social-political strategies. Understanding how
          to work with peers vs executives.{' '}
        </Text>
        <Text>
          I stumbled at first, and in that stumbling wondered if maybe the only
          way to actually get the buy-in I wanted was if I was the boss. I saw
          the struggle of not having positiional power, and I decided I would
          learn how to become a CEO so I could build a successful company.
        </Text>
        <Text>
          I worked in product and in product leadership where I saw things from
          the other side, where I saw that having positional power helps in a
          lot of ways. But it's not the cure-all I expected.
        </Text>
        <Text>
          So I learned some basic engineering skills. I figured a blend of
          positional power with "push the button" power (i.e. I don't need to
          wait for someone's buy-in, I can just build the thing) would help. And
          it did. But not in the absolute way I expected.
        </Text>
        <Text>
          And then after winding my way through these departments, through
          cultivating and shedding these objectives, pursuing and reaching these
          goals, I found myself in a similar position to where I started, asking
          one guiding question:{' '}
        </Text> */}
        <Heading size="lg">
          How do you mobilize insights to drive strategy across an organization?
        </Heading>
        <Text>
          That's the guiding question for how I engage with leaders like you.
        </Text>
        <Text>
          I help people who sit in one of the seats I sat in, knowing there is a
          way to pull more data into your decision-making, knowing there is a
          way to get your team aligned around a vision, knowing that other teams
          do this, but somehow, yours can't.
        </Text>
        <Text>Not yet, anyway.</Text>
        {/* 
        <Heading size="xl">
          Are you a leader, just sitting in front a software business, asking it
          to grow?{' '}
        </Heading>
        <Text>
          Wondering where that early success has gone, why projects today take
          longer to ship and get smaller results than before?
        </Text>
        <Text>
          Shipping enough experiments to get a Nobel Prize without seeing any
          measurable impact on numbers?
        </Text>
        <Text>
          Running research project after research project where you learn things
          you already knew?
        </Text>
        <Text>Starting to hear the rumbling of dissent in the ranks?</Text>
        <Text>
          Overwhelmed by all the things you *could* be doing -- like looking at
          what your competitors build, scaling ad spend, pulling a new
          acquisition lever, investigating churn, optimizing activation, or
          testing a new referral model -- without a clear idea on what you
          *should* be doing?
        </Text>
        <Text>
          What if you could break this growth plateau, unstick the
          decision-logjam, get your growth accelerating again, and stop
          guessing?
        </Text>
        <Text as="i">
          What if you could *know* exactly what to work on next and why?
        </Text>
        <Heading size="lg">
          Let me introduce you to "Root-cause-ology" aka: the discipline of
          figuring out the root cause of your growth challenges.{' '}
        </Heading>
        <Text>It's a blend of:</Text>
        <Text>💡 Jobs To Be Done Customer Research </Text>
        <Text>👥 Leadership & Team Relational Evaluation </Text>
        <Text>
          💰 Big Bucket of Money Analysis (aka looking at your quantitative data
          for your biggest opportunities)
        </Text>
        <Text>
          {' '}
          When leaders like you know the root cause of their growth challenges,
          they can:{' '}
        </Text>
        <Text>
          ✅ Close out the quarter with a clear strategy and 90% fewer unknown
          unknowns
        </Text>
        <Text>
          {' '}
          ✅ Say goodbye to decision fatigue and hello to having projects bubble
          up as the next obvious step on your path to getting great outcomes{' '}
        </Text>
        <Text>
          {' '}
          ✅ Set yourself up for the sustainable growth numbers that keep
          businesses running for decades{' '}
        </Text>
        <Text>
          ✅ Lay a foundation for long-term growth without sacrificing
          everything that works today
        </Text>
        <Text> ✅ Step into your role as a leader</Text> */}
        {/* <Image
          py={5}
          src="/media/logobar.png"
          alt="image of logos Alli has worked with, including MURAL, Atlassian, Stunning, EnjoyHQ, Codecademy, Output, Userlist, TinySeed, and Autobooks."
        /> */}
        {/* <Heading size="lg">Writing</Heading>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <NextLink href={`/posts/${id}`}>{title}</NextLink>
                <br />
                <small className={utilStyles.lightText}></small>
              </li>
            ))}
          </ul>
        </section> */}
        <Heading size="lg">
          One way I can help you get started now: sign up for emails
        </Heading>
        <Text>
          I write about how to get buy-in for your customer insights strategy
          and email semi-regularly.
        </Text>
        <Link href="https://buttondown.email/alli">
          <Text as="b" color="purple.600">
            Click this link to sign up for emails
          </Text>
        </Link>
        {/* <Input type="email" name="email" id="bd-email" />
          <Spacer />
          <Button type="submit" value="Subscribe" colorScheme="purple">
            Subscribe
          </Button> */}
      </Stack>
    </Layout>
  )
}
//   return (
//     <>
//       <Layout home>
//         <Head>
//           <title>{siteTitle}</title>
//         </Head>
//         <Box my={10}>
//           <Heading>Hi I'm Alli!</Heading>
//           <Text>
//             This is a sample website - you’ll be building a site like this on.
//           </Text>
//         </Box>
//         <Spacer />
//         <Box my={10}>
//           <Heading>Blog</Heading>
//         </Box>
//         <ul>
//           {allPostsData.map(({ id, date, title }) => (
//             <li className={utilStyles.listItem} key={id}>
//               <Link href={`/posts/${id}`}>{title}</Link>
//               <br />
//               <small className={utilStyles.lightText}>
//                 <Date dateString={date} />
//               </small>
//             </li>
//           ))}
//         </ul>
//       </Layout>
//     </>
//   )
// }

// export const getStaticProps: GetStaticProps = async () => {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData,
//     },
//   }
// }
