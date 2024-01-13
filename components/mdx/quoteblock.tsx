import React from 'react'
import { Box, Text, Stack } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
export interface QuoteBlockProps {
  quote1: string
  quote2: string
  quote3: string
  quote4: string
  author: string
}

export const theme = extendTheme({
  textStyles: {
    // h1: {
    //   // you can also use responsive styles
    //   fontSize: ['48px', '72px'],
    //   fontWeight: 'bold',
    //   lineHeight: '110%',
    //   letterSpacing: '-2%',
    // },
    // h2: {
    //   fontSize: ['36px', '48px'],
    //   fontWeight: 'semibold',
    //   lineHeight: '110%',
    //   letterSpacing: '-1%',
    // },
    text: {},
  },
})

const QuoteBlock: React.FC<QuoteBlockProps> = (props) => {
  return (
    // <ChakraProvider theme={theme}>
    <Box bg="purple.100" p={5} borderRadius="md">
      <Stack>
        <Text as="i">{props?.quote1}</Text>
        <Text as="i">{props?.quote2}</Text>
        <Text as="i">{props?.quote3}</Text>
        <Text as="i" as="strong">
          {props?.quote4}
        </Text>
        <Text as="strong">{props?.author}</Text>
      </Stack>
    </Box>
    // </ChakraProvider>
  )
}

export default QuoteBlock
