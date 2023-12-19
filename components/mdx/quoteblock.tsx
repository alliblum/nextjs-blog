import React from 'react'
import { Box, Text, Stack } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

export interface QuoteBlockProps {
  quote: string
  author: string
}

export const theme = extendTheme({
  textStyles: {
    text: {},
  },
})

const QuoteBlock: React.FC<QuoteBlockProps> = (props) => {
  return (
    <Box bg="purple.100" p={4} borderRadius="md">
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
