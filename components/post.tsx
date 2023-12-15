// import { React } from 'react';
import Layout from './layout'
// import { getAllPostIds, getPostData } from './posts'
import Head from 'next/head'
// import Date from '../../components/date'
// import utilStyles from '../../styles/utils.module.css';
import { GetStaticProps, GetStaticPaths } from 'next'
import { Heading, Box, Stack, Text } from '@chakra-ui/react'
// import { useMDXComponents } from '../../mdx-components'
// import { useRouter } from 'next/router'
// import MDXComponents from '../../components/mdxcomponents'
import { MDXProvider } from '@mdx-js/react'
import QuoteBlock from './mdx/quoteblock' // Adjust the path accordingly

const MDXComponents = {
  QuoteBlock,
}

const Post = ({
  postData,
}: {
  postData: {
    title: string
    // date: string
    contentHtml: string
    article: React.ReactNode
  }
}) => {
  return (
    <Box>
      <Head>{postData.title}</Head>
      <Layout>
        {/* <article>
          <h1> */}
        <Heading>{postData.title}</Heading>
        {/* </h1> */}

        {/* Render MDX content */}
        <MDXProvider components={MDXComponents}>{postData.article}</MDXProvider>
        {/* You can still render other HTML content if needed */}
        <text>{postData.contentHtml}</text>
        {/* <text>{postData.contentHtml}</text> */}
        {/* </article> */}
      </Layout>
    </Box>
  )
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = getAllPostIds()
//   return {
//     paths,
//     fallback: false,
//   }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const postData = await getPostData(params?.id as string)
//   return {
//     props: {
//       postData,
//     },
//   }
// }

export default Post
