import React from 'react'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
// import Date from '../../components/date'
// import utilStyles from '../../styles/utils.module.css';
import { GetStaticProps, GetStaticPaths } from 'next'
import { Heading, Box, Stack, Text } from '@chakra-ui/react'
import { useMDXComponents } from '../../mdx-components'
// import { useRouter } from 'next/router'
// import MDXComponents from '../../components/mdxcomponents'
import { MDXProvider } from '@mdx-js/react'
import Post from '../../components/post'

// import QuoteBlock from '../../components/mdx/quoteblock' // Adjust the path accordingly

// const MDXComponents = {
//   QuoteBlock,
// }

const PostPage = ({
  postData,
}: {
  postData: {
    title: string
    // date: string
    contentHtml: string
    article: React.ReactNode
  }
}) => {
  return <Post postData={postData} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string)
  console.log('postData:', postData)
  return {
    props: {
      postData: {
        ...postData,
        article: postData.article || null,
      },
    },
  }
}

export default PostPage

// const MDXPage = Post
// const MDXContent = useMDXComponents(Post)
// const MDXContent = useMDXComponents(Post.article)
// const MDXContent = Post.article
// const MDXContent = Post

// const MDXPage = ({ MDXContent }) => (
//   <MDXProvider components={MDXComponents}>
//     <MDXContent />
//   </MDXProvider>
// )

// import { MDXProvider } from '@next/mdx'
// import { QuoteBlock } from './components/mdx/quoteblock'

// const mdxComponent = {
//   QuoteBlock,
// }

// export const components = {
// QuoteBlock: dynamic (() => import ("../components/mdx/quoteblock"), {
//   ssr: false,
// }),

// export const components = {
//   QuoteBlock: dynamic (() => import("../components/mdx/QuoteBlock"),
// ),
// }

// export const components = {
//   QuoteBlock: props,
// }

// <Stack>
// {/* Render MDX content */}
// <MDXProvider components={MDXComponents}>
//   {postData.article}
// </MDXProvider>
// {/* Render HTML content */}
// <Text dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
// </Stack>
// </div>
