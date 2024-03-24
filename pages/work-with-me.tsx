import { QuoteBlock } from 'components/mdx'
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
          Leadership, Growth, and Innovation Strategy for Scale-ups
        </Heading>
        <Text>
          I've noticed a common pattern among teams that have found
          product-market fit but haven't yet reached breakaway growth. At this
          stage, possibilities for what to pursue next seem limitless.
          Still-scrappy teams pursue several paths simultaneously.
        </Text>
        <Text>
          {' '}
          While there's an illusion of progress and fast action, the ships
          aren't rowing in the same direction so growth often slows during this
          period.
        </Text>
        <Text>
          {' '}
          The way I've seen companies break out of this phase is to get aligned
          around a shared POV, whether that's having a shared understanding of
          what customers hire a product to do or hearing a clear and consistent
          message from a senior leader.
        </Text>

        <Text>
          If that sounds like you, I'd love to hear what's going on in your
          business.
        </Text>

        <Box py={5}>
          <Link href="https://savvycal.com/alli/c0518466">
            <Text color="purple.600" as="strong">
              Click to schedule time with me for a 60 minute meet-and-greet call
            </Text>
          </Link>
        </Box>

        <Heading>
          Get aligned and stay aligned as your company goes from startup to
          scale-up -- without compromising your vision
        </Heading>
        <Text>
          I work with companies as a solo consultant under the umbrella of my
          consulting brand, Hypothesis Department.
        </Text>
        <Text>
          I've observed the projects and frameworks outlined below to be among
          the most effective starting lines for our work together. I'd love to
          hear what's going on in your business to find the right place to begin
          our work.
        </Text>

        <Offer
          title="Innovation Strategy & Prototyping"
          subtitle="DESCRIBE IT"
          description="Two tracks of research + prototyping to uncover and validate new growth opportunities. We'll start with a research sprint to uncover the best opportunities for growth and then move into a prototyping sprint to validate those opportunities. You'll get a clear understanding of the best opportunities for growth and a prototype to test those opportunities with your customers."
          path="/work-with-me/innovation"
          linkText="Learn more about Innovation Strategy & Prototyping"
        />

        <Offer
          title="Commander's Intent"
          subtitle="One-on-one coaching for visionary founders"
          description="We'll distill the full body of your long-term vision into a single,
           clear, actionable shorthand that your team can start executing on. Go from
          repeating yourself about what’s important 15 times a day or saying no to projects that are out of
           alignment with what will move the needle for your company to hearing your team say, “I found this number that’s smaller than it should
          be, I have a hypothesis about how to improve it, here’s what I
          propose."
        />
        <Spacer />
        <Offer
          title="OKR Workshop"
          subtitle="Strategic planning workshop for leadership teams"
          description="There comes a point past reaching so-called product-market fit but before reaching maturity 
          or hyper-growth where businesses are at risk of being pulled in different directions. 
          Product teams have one POV, marketing teams see other opportunities, CEOs encounter the 
          pain of only being able to execute one small part of their vision at a time. We'll cut
           out all the winding paths and shiny objects to get your team rowing in the same 
           direction toward a set of clear and desirable goals for the next quarter, half-year, or year."
        />
        <Spacer />
        <Offer
          title="JTBD Discovery and Mobilization"
          subtitle="Innovation & Change Management Engagement for organizations"
          description="What outcomes do your customers want from your product? When do they start
           shopping for a solution like yours? We'll uncover core customer jobs-to-be-done and 
           then mobilize those insights across your organization. You'll get a clear 
           understanding of your customers and re-align your organization's decision-making 
           around a shared understanding of your best-fit customers so you can apply your 
           insights to decision-making around executive priorities, product development, 
           marketing strategies, company organization, and more.
         "
        />
        <Spacer />
        <Offer
          title="VUCA Workshop"
          subtitle="Team coaching to give your team the skills to navigate rapid change"
          description="Startup to scale-up environments are prone to VUCA: Volatility,
           Uncertainty, Complexity, and Ambiguity. Teams that find themselves in a VUCA
            environment without having the context to know what it is or the skills to navigate it are prone to grumpies, burnout, and sub-optimal decision-making. This workshop gives your team a new set of tools to navigate the 
            environment they find themselves in to keep morale high and decisions sound."
        />
        <Spacer />
        <Offer
          title="Outcomes-Led Team Coaching"
          subtitle="Operational excellence coaching for product teams"
          description="Taking an Outcomes-Led Approach is about centering your projects around 
          the outcome you're planning to achieve with any given project. This team coaching 
          engagement is about cultivating an outcomes-first and data-informed approach 
          to decision-making and co-creating SOPs to stay aligned with outcomes, even as new 
          opportunities arise."
        />
        <Spacer />
        <Offer
          title="Fractional Head of Product, Growth, Strategy, and/or Operations"
          subtitle="AKA, an advisor who does stuff."
          description="I'll join you as an embedded member of your leadership team to find 
          and mobilize the growth & innovation opportunities and then work with your team 
          to execute them and increase your acquisition, activation, and retention metrics.
          We'll build the systems and processes to stay aligned as you grow and scale. 
          I work with a very limited number of teams in this capacity."
        ></Offer>
        <Spacer />
        <Offer
          title="Diagnostic Assessment"
          subtitle="Two Hour Working Session to uncover the possible root causes of your growth challenges"
          description="If you're not share where to start, start here. We'll meet for a diagnostic session to talk about what's going on in your business, review data, and weigh tradeoffs."
        />
        <Spacer />
        <QuoteBlock
          quote="If you want to set your company up to succeed in the long term,
              if you are having a hard time finding the balance between
              long-term strategy and short-term tactical, as well as getting
              your team to move that way to see that too, you work with Alli.</br></br>
          If you want to create an environment where you can trust your
              employees to make decisions that support the long term objective
              and deliver the most value you possibly can for your customers,
              you work with Alli. </br></br>
          So if you want to figure out how to speak to your employees
              better, if you want to understand what your employees are going
              through, if you feel like you're having a hard time understanding,
              if you feel like you keep saying the same thing over and over and
              over again, and not being heard, and if you don't want to be
              completely stressed going through through this phase of growth... </br></br>
          ...You work with Alli.</br></br>"
          author="-Jordan Skole, VP Product Engineering at Autobooks"
        />
        <Spacer />
        <QuoteBlock
          quote="I was crafting the strategy and plan for my client to achieve their growth goals, but as a strategist, I could tell that something was missing or off. It was like there was a missing puzzle piece that I couldn't quite identify or articulate. I was also having a hard time extracting the information I needed from the CEO and founder to help us fit the pieces together to chart our best path forward. 

</br></br>Our session with Alli was the breakthrough I was looking for. Not only did she pull out so much more insight around what we needed to be successful, but she revealed some assumptions and requirements that weren't as clear or completely unknown before the session. The first big a-ha moment was that we had an opportunity to realign the client's efforts with the founder's vision. 

</br></br>And the second a-ha moment is that without Alli's thorough questioning and unpacking process, we wouldn't have arrived at our conclusions about what to do next (and I would have still been left scratching my head wondering what I was missing)."
          author="-Asia Orangio, Founder, DemandMaven"
        />
        <Spacer />
        <QuoteBlock
          quote="The experience of working with Alli is like collaborating with a
              trusted friend."
          author="-Claire Suellentrop, COO, Elevate"
        />
      </Stack>
    </Layout>
  )
}
