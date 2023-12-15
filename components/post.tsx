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
    contentHtml?: string
    article?: React.ReactNode
  }
}) => {
  // console.log('postData', postData)
  // console.log('postData.article', postData.article)
  console.log('contentHtml111:', postData)

  // if (!postData) {
  //   // You can decide how to handle this case, e.g., show an error message or redirect
  //   return <div>Error: Post data not available</div>
  // }

  // // Destructure postData to extract title, contentHtml, and article
  // const { title, contentHtml, article } = postData

  return (
    <Box>
      <Head>{postData?.title}</Head>
      <Layout>
        {/* <article>
          <h1> */}
        <Heading>{postData?.title}</Heading>
        {/* </h1> */}
        {/* Render MDX content */}
        {postData?.article && (
          <MDXProvider components={MDXComponents}>
            {postData?.article}
          </MDXProvider>
        )}

        <MDXProvider components={MDXComponents}>
          {postData?.article}
          {postData?.contentHtml}
        </MDXProvider>

        {/* <MDXProvider components={MDXComponents}>{postData.article}</MDXProvider> */}
        {/* You can still render other HTML content if needed */}

        <div className="markdown-body">
          <Box dangerouslySetInnerHTML={{ __html: postData?.contentHtml }} />
        </div>

        {/* <text>{postData.contentHtml}</text> */}
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
