// import React from 'react'

// import {
//   Box,
//   Text,
//   Heading,
//   Link,
//   Stack,
//   UnorderedList,
//   ListItem,
// } from '@chakra-ui/react'

import React from 'react'
import { Box, Text, Stack } from '@chakra-ui/react'

export interface QuoteBlockProps {
  quote: string
  author: string
}

const QuoteBlock: React.FC<QuoteBlockProps> = (props) => {
  return (
    <Box bg="purple.100" p={4} borderRadius="md">
      this is quoteblock
      <Stack>
        <Text as="i">"{props.quote}"</Text>
        <Text as="strong">{props.author}"</Text>
      </Stack>
    </Box>
  )
}

export default QuoteBlock

// export type QuoteBlockProps = {
//   quote: string
//   author: string
// }

// const QuoteBlockBox: React.FC<QuoteBlockProps> = (props) => {
//   return (
//     <Box bg="purple.100" p={4} borderRadius="md">
//       <Stack>
//         <Text as="i">"{props.quote}"</Text>
//         <Text as="strong">{props.author}"</Text>
//       </Stack>
//     </Box>
//   )
// }

// export default QuoteBlock

// export default function QuoteBlock({ props }) {
//   const quote = [props.quote]
//   const name = [props.name]

//   return (
//     <Box bg="purple.100" p={4} borderRadius="md">
//       <Stack>
//         <Text as="i">"{props.quote}"</Text>
//         <Text as="strong">{props.name}"</Text>
//       </Stack>
//     </Box>
//   )
// }
