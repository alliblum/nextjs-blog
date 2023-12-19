import { Box, Heading } from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
import { MDXRemote } from 'next-mdx-remote'
import Head from 'next/head'
import Layout from './layout'
import QuoteBlock from './mdx/quoteblock'

const MDXComponents = {
  QuoteBlock,
}

interface PostData {
  title: string
  contentHtml?: string
  article?: React.ReactNode
  compiledSource: string
}

interface PostProps {
  postData: PostData
  source: string
}

const Post = ({ postData, source }: PostProps) => {
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

        {source && (
          <MDXProvider components={MDXComponents}>
            <div className="markdown-body">
              <MDXRemote
                components={MDXComponents}
                compiledSource={''}
                scope={undefined}
                frontmatter={undefined}
              />
            </div>
          </MDXProvider>
        )}
      </Layout>
    </Box>
  )
}

export default Post
