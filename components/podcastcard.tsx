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

export interface PodcastCardProps {
  NameAndHost: string
  EpisodeTitle: string
  EpisodeDescription: string
  EpisodeArt?: { src: string; alt: string; width: number; height: number }
  EpisodeLink: string
}

// export const theme = extendTheme({})

export const PodcastCard: React.FC<PodcastCardProps> = (props) => {
  return (
    <Card m={5}>
      <CardBody>
        <Stack>
          <Heading size="md">{props.NameAndHost}</Heading>
          <Text fontStyle="italic">{props.EpisodeTitle}</Text>
          <Text>{props.EpisodeDescription}</Text>
          <Center>
            <Image
              src={props?.EpisodeArt.src}
              alt={props?.EpisodeArt.alt}
              width={props?.EpisodeArt.width}
              height={props?.EpisodeArt.height}
            />
          </Center>
          <Center my={5}>
            <Link href={props.EpisodeLink}>
              <Button colorScheme="purple" size="lg" px={10}>
                Listen now
              </Button>
            </Link>
          </Center>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default PodcastCard
