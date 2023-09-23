import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import { Heading, Text } from '@chakra-ui/react'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section>
          <Heading>Hi I'm Alli!</Heading>
          <Text>
            This is a sample website - you’ll be building a site like this on.
          </Text>
        </section>
        <section>
          <h2>Blog</h2>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </>
  )
}
