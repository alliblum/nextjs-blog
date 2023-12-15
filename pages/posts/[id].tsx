import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
// import Date from '../../components/date'
// import utilStyles from '../../styles/utils.module.css';
import { GetStaticProps, GetStaticPaths } from 'next'
import { Heading, Box, Stack } from '@chakra-ui/react'
import { useMDXComponents } from '../../mdx-components'
import MDXComponents from '../../components/mdxcomponents'
import { MDXProvider } from '@mdx-js/react'

// import { MDXProvider } from '@next/mdx'
// import QuoteBlock from './components/mdx/quoteblock'

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

export default function Post({
  postData,
}: {
  postData: {
    title: string
    // date: string
    contentHtml: string
    article: object
  }
}) {
  // const MDXPage = Post
  // const MDXContent = useMDXComponents(Post)
  // const MDXContent = useMDXComponents(Post.article)
  // const MDXContent = Post.article
  // const MDXContent = Post

  const MDXPage = ({ MDXContent }) => (
    <MDXProvider>
      <MDXContent />
    </MDXProvider>
  )
  return (
    <Box>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Layout>
        <article>
          <Heading>
            <h1>{postData.title}</h1>
          </Heading>
          <br />
          {/* <Date dateString={postData.date} /> */}
          {/* <MDXContent {...MDXComponents} /> */}
          {/* <MDXContent {...MDXComponents} /> */}
          <br /> <br />
          <text dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    </Box>
  )
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
  return {
    props: {
      postData,
    },
  }
}
