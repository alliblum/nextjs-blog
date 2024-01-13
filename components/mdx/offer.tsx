import React from 'react'
import { Box, Text, Stack, Heading } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
export interface OfferProps {
  title: string
  subtitle: string
  description: string
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

const Offer: React.FC<OfferProps> = (props) => {
  return (
    // <ChakraProvider theme={theme}>
    <Box bg="purple.100" p={4} borderRadius="md">
      <Stack>
        <Heading>{props.title}</Heading>
        <Text as="i">{props.subtitle}</Text>
        <Text as="strong">{props?.description}</Text>
      </Stack>
    </Box>
    // </ChakraProvider>
  )
}

export default Offer
