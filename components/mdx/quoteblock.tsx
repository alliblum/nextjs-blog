import {
  Box,
  Text,
  Heading,
  Link,
  Stack,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'

export type QuoteBlockProps = {
  quote: string
  author: string
}

export default function QuoteBlock(props: QuoteBlockProps) {
  return (
    <Box bg="purple.100" p={4} borderRadius="md">
      <Stack>
        <Text as="i">"{props.quote}"</Text>
        <Text as="strong">{props.author}"</Text>
      </Stack>
    </Box>
  )
}

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
