import { QuoteBlock } from 'components/mdx'
import Layout from 'components/layout'
import EmailForm from 'components/email-form'

import Image from 'next/image'

import {
  Box,
  Text,
  Heading,
  Spacer,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
  Stack,
  UnorderedList,
  ListItem,
  Center,
  List,
  OrderedList,
} from '@chakra-ui/react'
import { max } from 'date-fns'
import { inherits } from 'util'

export interface AppearanceCardProps {
  NameAndHost: string
  Title: string
  Description: string
  ButtonText?: string
  Link?: string
}

// export const theme = extendTheme({})

export const AppearanceCard: React.FC<AppearanceCardProps> = (props) => {
  return (
    <Card m={5}>
      <CardBody>
        <Stack>
          <Heading size="md">{props.NameAndHost}</Heading>
          <Text fontStyle="italic">{props.Title}</Text>
          <Text>{props.Description}</Text>

          {props.Link && (
            <Center my={5}>
              <Link href={props.Link}>
                <Button colorScheme="purple" size="lg" px={10}>
                  {props.ButtonText || 'Listen now'}
                </Button>
              </Link>
            </Center>
          )}
        </Stack>
      </CardBody>
    </Card>
  )
}

export default AppearanceCard
