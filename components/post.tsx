import React from 'react'
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
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

const MDXComponents = {
  QuoteBlock,
}

const Post = ({
  postData,
  source,
}: {
  postData: {
    title: string
    article?: React.ReactNode
  }
  source: { [key: string]: React.ReactNode }
}) => {
  return (
    <Box>
      <Head>{postData?.title}</Head>
      <Layout>
        <Heading>{postData?.title}</Heading>
        {postData?.article && (
          <MDXProvider components={MDXComponents}>
            {postData?.article}
          </MDXProvider>
        )}
        <MDXProvider components={MDXComponents}>
          <div className="markdown-body">
            <MDXRemote
              compiledSource={''}
              scope={undefined}
              frontmatter={undefined}
              {...source}
              components={MDXComponents}
            />
          </div>
        </MDXProvider>
      </Layout>
    </Box>
  )
}

export default Post
