// import * as mdxComponents from '@/components/mdx'
import type { MDXComponents } from 'mdx/types'
import React from 'react'

// // This file allows you to provide custom React components
// // to be used in MDX files. You can import and use any
// // React component you want, including inline styles,
// // components from other libraries, and more.

// export function useMDXComponent(components: MDXComponents): MDXComponents {
//   return {
//     // Allows customizing built-in components, e.g. to add styling.
//     // h1: ({ children }) => <h1 style={{ fontSize: '100px' }}>{children}</h1>,
//     // QuoteBlock: ({ props }) => <QuoteBlock {...props} />,

//     ...components,
//     ...mdxComponents,
//   }
// }

const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}

module.exports = withMDX(nextConfig)

// QuoteBlock: ({ ...props }) => import('./components/mdx/quoteblock'),

//     ...components,
//   }
// }

// // This file is required to use @next/mdx in the `app` directory.
// export function useMDXComponents(components) {
//   // return components
//   // Allows customizing built-in components, e.g. to add styling.
//   return {
//     h1: ({ children }) => <h1 style={{ fontSize: '100px' }}>{children}</h1>,
//     ...components,
//   }
// }

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  }
}

export default MDXComponents
