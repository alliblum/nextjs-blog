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
  Link,
  Button,
  chakra,
  Image,
} from '@chakra-ui/react'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import NextLink from 'next/link'
// import Image from 'next/image'

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
        <Text> ✅ Step into your role as a leader</Text>

        <Image
          py={5}
          src="/media/logobar.png"
          alt="image of logos Alli has worked with, including MURAL, Atlassian, Stunning, EnjoyHQ, Codecademy, Output, Userlist, TinySeed, and Autobooks."
        />
        <Heading size="lg">Writing</Heading>
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
        </section>
        <Heading>Sign up for emails</Heading>
        <Text>
          The topics I'm most excited about these days are about outcomes-led
          growth, getting buy-in, and building teams. Sign up for emails and
          I'll send you a note when I have new writing to share with you.
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
