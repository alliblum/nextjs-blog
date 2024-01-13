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
        <Heading size="xl">Hi, I’m Alli. </Heading>

        <Text>
          I help SaaS leaders and teams get and stay aligned while you navigate
          the transition from startup to scaleup.
        </Text>

        <Text>
          I’ve spent the last 10+ years working with 50+ companies figuring out
          how software companies launch and scale by winding my way through the
          many functions and departments that drive growth at mega-hits like
          MURAL, EnjoyHQ, Atlassian and indie companies like Stunning, Userlist,
          and TinySeed companies.{' '}
        </Text>

        <Text>
          I've worked across functions including leadership, product, growth,
          UX, user research, marketing, conversion copywriting, GTM planning,
          leadership, operations, customer support, positioning, public
          relations, change management, and engineering.{' '}
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
