import Layout from '../components/layout'
import Offer from '../components/mdx/offer'
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
        <Spacer />
        <Offer
          title="OKR Workshop"
          subtitle="Group workshop for leadership teams"
          description="There comes a point past so-called product-market fit but before hypergrowth where businesses are at risk of being pulled in different directions. Product teams have one POV, marketing teams see other opportunities, CEOs encounter the pain of only being able to execute one small part of their vision at a time. I'll work with you and your leadership team to cut out all the coulds and shoulds to get your team rowing in the same aligned direction."
        />
        <Spacer />
        <Offer
          title="JTBD Discovery and Mobilization"
          subtitle="Innovation & Change Management Engagement for organizations"
          description="What outcomes do your customers want from your product? When do they start shopping for a solution like yours? We'll uncover core customer jobs-to-be-done and then mobilize those insights across your organization. You'll get a clear understanding of your customers and re-align your organization's decision-making around a shared understanding of your best-fit customers so you can apply your insights to decision-making around executive priorities, product development, marketing strategies, company organization, and more.
         "
        />
        <Spacer />
        <Offer
          title="VUCA Workshop"
          subtitle="Team coaching to give your team the skills to navigate rapid change"
          description="Startup to scale-up environments are prone to generating VUCA: Volatility, Uncertainty, Complexity, and Ambiguity. Teams that find themselves in a VUCA environment without having the context or skills to navigate it are prone to burnout and the grumpies. This workshop give your team a new set of tools to navigate the unique environment they find themselves in to keep morale high and decisions sound."
        />
        <Spacer />
        <Offer
          title="Outcomes-Led Team Coaching"
          subtitle="Operations coaching for product teams"
          description="Taking an Outcomes-Led Approach is about centering your projects around the outcome you're planning to acheive with any given project. This team coaching engagement is about giving cultivating an outcomse-first and data-informed approach to decision-making and co-creating SOPs to stay aligned with outcomes, even as new opportunities arise."
        />
        <Spacer />
        <Offer
          title="Fractional Head of Product, Growth, Strategy, and/or Operations"
          subtitle="AKA, an advisor who does stuff."
          description="I'll join you as an embedded member of your leadership team to find and mobilize the growth & innovation opportunities and then work with your team to execute them and increase your acquisition, activation, and retention metrics. We'll build the systems and processes to stay aligned as you grow and scale. I work with one company at a time and am currently booked."
        ></Offer>
      </Stack>
    </Layout>
  )
}
