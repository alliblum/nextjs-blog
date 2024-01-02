import React from 'react'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import fs from 'fs'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Heading, Box, Stack, Text } from '@chakra-ui/react'
import { useMDXComponents } from '../../mdx-components'

import { MDXProvider } from '@mdx-js/react'

import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
// import QuoteBlock from '../../components/mdx/quoteblock' // Adjust the path accordingly

import Post from '../../components/post'

function fetchMdxContent(id: string | string[]) {
  const mdxFilePath = path.join(process.cwd(), 'posts', `${id}.mdx`)
  const content = fs.readFileSync(mdxFilePath, 'utf8')
  return content
}
function processMdxContent(mdx: string) {
  // Perform any necessary processing on the MDX content
  // For example, you can parse the front matter or apply custom transformations

  // Return the processed content
  return mdx
}

const PostPage = ({
  postData,
  source,
}: {
  postData: {
    title: string
    contentHtml: string
    article: React.ReactNode
    source: string
    compiledSource: string
  }
  source: string
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id
  const mdx = await fetchMdxContent(params.id)
  const postsDirectory = path.join(process.cwd(), 'posts')
  const fullPath = path.join(postsDirectory, `${id}.mdx`)
  const mdxFilePath = path.join(postsDirectory, `${id}.mdx`) //path.join(process.cwd(), 'content', 'example.mdx')
  const source = fs.readFileSync(mdxFilePath, 'utf8')
  const { content, data } = matter(source)

  const mdxSource = await serialize(content)
  const postData = processMdxContent(mdx)

  return {
    props: {
      postData,
      mdx,
    },
  }
}
export default PostPage
