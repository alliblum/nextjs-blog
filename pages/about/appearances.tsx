import { QuoteBlock } from 'components/mdx'
import Layout from 'components/layout'
import EmailForm from 'components/email-form'

import Image from 'next/image'

import {
  Box,
  Text,
  Heading,
  Spacer,
  Link,
  Stack,
  UnorderedList,
  ListItem,
  Center,
  List,
  OrderedList,
} from '@chakra-ui/react'

export default function Appearances() {
  return (
    <Layout home>
      <Stack spacing={5}>
        <Heading size="xl">
          What a great privilege to join smart folks to talk about mobilizing
          insights
        </Heading>
        <Text></Text>
      </Stack>
    </Layout>
  )
}
