import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
// import Date from '../../components/date'
// import utilStyles from '../../styles/utils.module.css';
import { GetStaticProps, GetStaticPaths } from 'next'
import { Heading, Box } from '@chakra-ui/react'
import { useMDXComponent } from '../../mdx-components'
// import QuoteBlock from './components/mdx/quoteblock'

// const mdxComponent = {
//   QuoteBlock,
// }

export default function Post({
  postData,
}: {
  postData: {
    title: string
    // date: string
    contentHtml: string
  }
}) {
  const MDXContent = useMDXComponent(Post.body.code)
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
          <MDXContent />
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
