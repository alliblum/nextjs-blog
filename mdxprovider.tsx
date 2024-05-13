import { MDXProvider } from '@mdx-js/react'
import QuoteBlock from './components/mdx/quoteblock' // Adjust the path accordingly

import {} from './components/mdx'

const components = {
  QuoteBlock,
}

const MyMDXPage = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
)

export default components
