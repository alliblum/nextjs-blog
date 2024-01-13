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
    <Box>
      <Box
        bg="purple.100"
        p={5}
        borderTopLeftRadius="md"
        borderTopRightRadius="md"
        //   borderWidth={3}
        //   borderColor="purple.600"
      >
        <Heading size="lg">{props.title}</Heading>
        <Text as="i">{props.subtitle}</Text>
      </Box>
      <Box
        bg="white"
        p={5}
        borderBottomLeftRadius="md"
        borderBottomRightRadius="md"
        borderWidth={2}
        borderColor="purple.100"
      >
        <Text>{props?.description}</Text>
      </Box>
    </Box>

    // </ChakraProvider>
  )
}

export default Offer
