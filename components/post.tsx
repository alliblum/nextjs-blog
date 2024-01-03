import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { MDXProvider } from '@mdx-js/react'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Heading, Box, Stack, Text } from '@chakra-ui/react'

import Layout from './layout'
import QuoteBlock from './mdx/quoteblock' // Adjust the path accordingly
import PostData from '../types/PostData'

const MDXComponents = {
  QuoteBlock,
}

const Post = ({
  postData,
  source,
}: {
  postData: PostData
  source: MDXRemoteSerializeResult
}) => {
  return (
    <Box>
      <Head>{postData?.title}</Head>
      <Layout>
        <Heading>{postData?.title}</Heading>
        <p>{postData?.date}</p>
        <p>{postData?.color}</p>
        {/* Render MDX content */}
        <MDXProvider components={MDXComponents}>
          <div className="markdown-body">
            <MDXRemote {...source} components={MDXComponents} />
          </div>
        </MDXProvider>
      </Layout>
    </Box>
  )
}

export default Post
