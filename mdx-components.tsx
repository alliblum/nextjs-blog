import type { MDXComponents } from 'mdx/types'
import QuoteBlock from './components/mdx/quoteblock'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 style={{ fontSize: '100px' }}>{children}</h1>,
    QuoteBlock: (props) => <QuoteBlock {...props} />,

    ...components,
  }
}

// This file is required to use @next/mdx in the `app` directory.
// export function useMDXComponents(components) {
//   return components
// Allows customizing built-in components, e.g. to add styling.
// return {
//   h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
//   ...components,
// }
