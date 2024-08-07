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
import { redirect } from 'next/navigation'

import { TbBulb } from 'react-icons/tb'

import { usePathname } from 'next/navigation'
// import Link from 'next/link'
import { useRouter } from 'next/router'

import { GetStaticProps } from 'next'
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
  const router = useRouter()
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
          I remember walking into my downtown converted-loft office with a huge
          smile on my face. With the tenor of someone who was about to change
          the entire company’s growth trajectory, I’d boast:
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
        <Text>"Their loss! Guess they just don't like making money."</Text>
        <Text>
          But soon I started to see that grumbling didn't help me.{' '}
        </Text>{' '}
        <Text>
          Instead of blaming my colleagues for not seeing the value of research,
          I decided to get really good at showing its value.
        </Text>
        <Text>And since I made that shift, I have:</Text>
        <UnorderedList>
          <ListItem>
            Gotten buy-in for using JTBD in onboarding strategies that led to
            triple-digit increases in performance
          </ListItem>
          <ListItem>
            Coached over 50 people on how to set up their qualitative research
            repositories AND gotten other team members actually using the data
            stored inside
          </ListItem>
          <ListItem>
            Launched a 0-1 product in a highly regulated industry in the face of
            deep internal resistance from folks who said that these customers
            "preferred spreadsheets" and "would never use an app"
          </ListItem>
          <ListItem>
            Sourced and applied VOC data for projects on sales, product,
            marketing, customer success, and even engineering teams
          </ListItem>
          <ListItem>
            Learned ways of playing organizational politics that are nothing
            like the "manipulate and screw people over" games I used to fear
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
        <Image
          py={5}
          src="/media/logobar.png"
          alt="image of logos Alli has worked with, including MURAL, Atlassian, Stunning, EnjoyHQ, Codecademy, Output, Userlist, TinySeed, and Autobooks."
        />
        <Heading size="md">
          Now I help software product, marketing, sales, and engineering leaders
          like you mobilize customer insights across your org
        </Heading>
        <Text>
          I help people who sit in one of the seats I sat in. Who know there is
          a way to pull more data into your decision-making. Who know there is a
          way to get your team aligned around a vision. Who know that other
          teams do this, but somehow, yours can't.
        </Text>
        <Text>Not yet, anyway.</Text>
        <Button
          variant="solid"
          colorScheme={'purple'}
          p={6}
          onClick={() => router.push('/research-buy-in')}
        >
          Let me teach you how to get buy-in on VOC
        </Button>
      </Stack>
    </Layout>
  )
}
