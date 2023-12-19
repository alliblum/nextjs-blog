import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
// import parse from 'fenceparser'
// import { remark } from 'remark'
// import remarkMdx from 'remark-mdx'
// import { remarkTypescript } from 'remark-typescript'
// import Head from 'next/head';
// import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
// import remarkRehype from 'remark-rehype'
// import remarkHtml from 'remark-html'
// import {unified} from 'unified'
// import React from 'react'
// import ReactMarkdown from 'react-markdown'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified, Processor } from 'unified'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.mdx$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ''),
      },
    }
  })
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  const article = matterResult.data?.article || null

  // Use remark to convert markdown into HTML string
  // const processedContent = await remark()
  //   .use(remarkHtml)
  //   .process(matterResult.content)

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(matterResult.content)

  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  const postData = {
    id,
    // ...matterResult.data
    contentHtml,
    // title,
    article,
    // article: matterResult.data.article,
    ...(matterResult.data as { date: string; title: string }),
  }
  return postData
}
