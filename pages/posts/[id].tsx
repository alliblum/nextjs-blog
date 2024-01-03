// import { React } from 'react';
import { MDXProvider } from '@mdx-js/react'
import { Heading, Box, Stack, Text } from '@chakra-ui/react'
import fs from 'fs'
import { GetStaticProps, GetStaticPaths } from 'next'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import Head from 'next/head'

import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import { useMDXComponents } from '../../mdx-components'
import Post from '../../components/post'
import PostData from '../../types/PostData'

const PostPage = ({
  postData,
  source,
}: {
  postData: PostData
  source: MDXRemoteSerializeResult
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
  const postsDirectory = path.join(process.cwd(), 'posts')
  const fullPath = path.join(postsDirectory, `${id}.mdx`)
  const mdxFilePath = path.join(postsDirectory, `${id}.mdx`) //path.join(process.cwd(), 'content', 'example.mdx')
  const source = fs.readFileSync(mdxFilePath, 'utf8')
  const { content, data } = matter(source)
  const mdxSource = await serialize(content)
  return {
    props: {
      source: mdxSource,
      postData: data,
    },
  }
}

export default PostPage
