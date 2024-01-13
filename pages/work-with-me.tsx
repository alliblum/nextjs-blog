import Layout from '../components/layout'
import Offer from '../components/mdx/offer'
import {
  Box,
  Text,
  Heading,
  Link,
  Stack,
  UnorderedList,
  ListItem,
  Center,
} from '@chakra-ui/react'

export default function WorkWithMe() {
  return (
    <Layout home>
      <Stack spacing={5}>
        <Heading size="xl">
          Get aligned and stay aligned as your company goes from startup to
          scale-up - without compromising your vision{' '}
        </Heading>

        <Text>
          Over the last 10 years I've had the great privilege to work and learn
          with a great many teams. I love joining companies who have just
          started to discover the champagne problem of having so many
          opportunities they don't know which one offers the best path forward.{' '}
        </Text>

        <Offer
          title="Commander's Intent"
          subtitle="One-on-one coaching for visionary founders"
          description="Go from
          repeating yourself about what’s important 15 times a day without
          seeing anyone do anything about it to fielding inbound requests from
          your team saying, “I found this number that’s smaller than it should
          be, I have a hypothesis about how to improve it, here’s what I
          propose."
        />
        <Offer
          title="OKR Facilitation"
          subtitle="Group coaching for leadership teams"
          description="Get aligned around a shared vision and build habits for staying aligned as new opportunities arise."
        />

        <Offer
          title="JTBD Discovery and Mobilization"
          subtitle="Get a clear understanding of your customers and re-align your organization's decision-making around a shared understanding of your best-fit customers."
          description="What outcomes do your customers want from your product? When do they start shopping for a solution like yours? We'll uncover your customers core jobs to be done. Then we'll mobilize those insights across your organization to apply insights to decision-making around executive priorities, product development, marketing strategies, company organization, and more."
        />
        <Offer
          title="VUCA Workshops"
          subtitle="Team coaching to give your team the skills to navigate rapid change"
          description="somethin'"
        />
        <Offer
          title="Product Team Coaching"
          subtitle="Build habits and SOPs for staying aligned as new opportunities arise."
          description="somethin'"
        />
        <Offer
          title="Fractional Head of Product, Growth, Strategy, and/or Operations"
          subtitle="AKA, an advisor who does stuff."
          description="somethin'"
        ></Offer>
      </Stack>
    </Layout>
  )
}
