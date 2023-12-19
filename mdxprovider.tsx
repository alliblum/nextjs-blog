import MDXProvider from '@mdx-js/react'
import QuoteBlock from './components/mdx/quoteblock' // Adjust the path accordingly
// import MDXComponents from 'components/mdxcomponents'
import {} from './components/mdx'

const components = {
  QuoteBlock,
}

const MyMDXPage = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
)

export default components

// // MDXProvider.tsx
// import React from 'react'
// import { MDXProvider } from '@mdx-js/react'
// // import QuoteBlock from './QuoteBlock';
// import QuoteBlock from './components/mdx/quoteblock'

// const components = {
//   QuoteBlock,
//   // Add other custom components here
// }

// const CustomMDXProvider: React.FC = ({ children }) => {
//   return <MDXProvider components={components}>{children}</MDXProvider>
// }

// export default CustomMDXProvider
