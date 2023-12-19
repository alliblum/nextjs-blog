// import { React } from 'react';
// import { GetStaticProps } from 'next'
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
import QuoteBlock from './mdx/quoteblock'

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
    // date: string
    contentHtml?: string
    article?: React.ReactNode
    source: string
  }
}) => {
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
          <div className="markdown-body">
            <MDXRemote {...source} components={MDXComponents} />
          </div>
        </MDXProvider>

        <div className="markdown-body">
          <Box dangerouslySetInnerHTML={{ __html: postData?.contentHtml }} />
        </div>
      </Layout>
    </Box>
  )
}

export default Post
