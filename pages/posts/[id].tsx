// import { React } from 'react';
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import fs from 'fs'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Heading, Box, Stack, Text } from '@chakra-ui/react'
import { useMDXComponents } from '../../mdx-components'

import { MDXProvider } from '@mdx-js/react'
import Post from '../../components/post'

import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
// import QuoteBlock from '../../components/mdx/quoteblock' // Adjust the path accordingly

const PostPage = ({
  postData,
  source,
}: {
  postData: {
    title: string
    // date: string
    contentHtml: string
    article: React.ReactNode
  }
}) => {
  return <Post postData={postData} source={source} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const postData = await getPostData(params?.id as string)
//   return {
//     props: {
//       postData: {
//         ...postData,
//         article: postData.article || null,
//       },
//     },
//   }
// }
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id
  const postsDirectory = path.join(process.cwd(), 'posts')
  const fullPath = path.join(postsDirectory, `${id}.mdx`)
  const mdxFilePath = path.join(postsDirectory, `${id}.mdx`) //path.join(process.cwd(), 'content', 'example.mdx')
  const source = fs.readFileSync(mdxFilePath, 'utf8')
  const { content, data } = matter(source)

  const mdxSource = await serialize(content)
  console.log(
    '🚀 ~ file: [id].tsx:75 ~ constgetStaticProps:GetStaticProps= ~ mdxSource:',
    mdxSource
  )

  return {
    props: {
      source: mdxSource,
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
