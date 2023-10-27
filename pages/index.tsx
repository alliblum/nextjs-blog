import Head from 'next/head'
import { Heading } from '@chakra-ui/react'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'

import { GetStaticProps } from 'next'
// import { Box, Heading, Text, Spacer } from '@chakra-ui/react'
// import theme from './_app'

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
      <section className={utilStyles.headingMd}>
        <Heading size="xl">Hi, I’m Alli. </Heading>
        <br />
        <p>
          I love working with conscious, empathetic leaders and founders who are
          rigorous in their pursuit of the root causes of problems and focused
          on building solutions in the future of work and calm technology.{' '}
        </p>
        <br />
        <p>
          I’ve spent the last 10+ years working with 50+ companies figuring out
          how software companies launch and scale by winding my way through the
          many functions and departments that drive growth.{' '}
        </p>
        <br />
        <p>
          That list of departments includes product, growth, and marketing. The
          list of skills and functions includes UX, research, marketing,
          conversion copywriting, GTM planning, leadership, operations, customer
          support, positioning, public relations, change management - now I’m
          learning engineering.{' '}
        </p>
        <br />
        <Heading size="lg">Work:</Heading>
        <br />
        <p>
          {' '}
          I work with SaaS companies through my consulting arm, Hypothesis
          Department. I help founders and leaders build teams and products, I
          help JTBD practitioners mobilize insights, and I help leaders and
          founders build teams and products.{' '}
        </p>
        <br />
        <Heading size="lg">Writing:</Heading>
        <br />
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}></small>
            </li>
          ))}
        </ul>
      </section>
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

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
