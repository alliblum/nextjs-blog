import { QuoteBlock } from 'components/mdx'
import Layout from 'components/layout'

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
} from '@chakra-ui/react'

export default function Growth() {
  return (
    <Layout home>
      <Stack spacing={5}>
        <Heading size="xl">
          Most unsolved growth problems are really two problems.
        </Heading>
        <Text as="b">Problem 1: Something is happening.</Text>
        <Text as="b">
          {' '}
          Problem 2: No one knows why that thing is happening.
        </Text>
        <Text>
          {' '}
          <>
            There’s a lot of traffic to your site, but hardly anyone starts a
            trial or requests a demo. <br />
            <Text as="i">No one knows why.</Text>
          </>
        </Text>
        <Text>
          <>
            People start trials, sign in a few times, invite their teammates to
            create accounts, but hardly anyone upgrades to a paying account.
            <br />
            <Text as="i">No one knows why.</Text>
          </>
        </Text>
        <Text>
          <>
            About 4 months into their subscription, customers churn.
            <br />
            <Text as="i">No one knows why.</Text>
          </>
        </Text>
        <Text>
          And in between the myriad projects you’re shipping, investigating the
          root causes of growth- and revenue-related problems becomes a “someday
          project”.
        </Text>
        <Text>
          <>
            <Text as="i">Someday </Text>you’ll identify a set of customers to
            interview.
            <br />
            <Text as="i">Someday </Text>you’ll run some surveys on our site.{' '}
            <br />
            <Text as="i">Someday </Text> you’ll sync with another team to see if
            they can support a user research project.
            <br />
          </>
        </Text>
        <Heading size="lg">
          Building that long-term scaleable predictable growth foundation will
          have to wait for someday because today you need to worry about right
          now.{' '}
        </Heading>
        <Heading size="lg">Or do you?</Heading>
        <Text>
          You have a to-do list a mile long. There are PLG motions to implement
          and partnership programs to build. Product refreshes to ship and
          features your customers have been asking for. Content to write. Ads to
          tweak. Onboarding experiences to re-tool.
        </Text>
        <Text>
          You've been operating like a scrappy startup, shipping fast and
          getting fast results (or at least fast feedback) for a long time, but
          results are starting to take longer to realize. The projects
          themselves are starting to seem bigger.
        </Text>
        <Text>
          This phase is common for many fast-growing and innovative companies.
          Prioritize "quick wins" and "low hanging fruit" long enough and pretty
          soon it's inevitable that your to-do list will only contain fruit high
          up in the tree that takes more time, people, and resources to get.
        </Text>{' '}
        <Text>
          Some leaders in this stage double down on their brute force approach,
          keep chasing quick wins, keep getting disappointed that the progress
          doesn't come as fast as it used to, keep getting stuck in the muck.
        </Text>
        <Text>Others say, "The game has changed, and we must change too."</Text>
        <Text>
          {' '}
          These companies look at what's working, what isn't, and what they need
          to do differently if they want to achieve their goals -- even if what
          they have to do is make big uncomfortable changes.
        </Text>
        <Text>
          Both teams move at about the same pace and both have slow growth for a
          quarter or two. But the second group will have spent the time building
          a foundation for scaleable, sustainable growth.{' '}
        </Text>
        <Text>
          They'll stop guessing and start knowing. The second group will see
          growth accelerate again.{' '}
        </Text>
        <Text>The first group very likely won't.</Text>
        <Heading size="lg">
          Let's find the root cause of your growth plateau, get the insights to
          break through it, and decide what projects set you up for long term
          scaleable, predictable growth.
        </Heading>
        <Text>
          Here's how we'll lay your foundation for a growth engine that doesn't
          keep you up at night.
        </Text>
        <QuoteBlock
          quote="Phase 1:"
          author="Collect intel on where you're at and where you want to go"
        />
        <Text>
          We'll begin our work with rigorous analysis of the factors
          contributing to your growth plateau. We'll collect intel from your
          data platforms, from your teammates, and from your customers.{' '}
        </Text>
        <UnorderedList>
          <ListItem>
            Kickoff session with project leader and 1-2 key stakeholders to
            discuss goals and objectives
          </ListItem>{' '}
          <ListItem>
            Meet 1:1 with 6 team members (at least 3 executives and at least 3
            individual contributors){' '}
          </ListItem>
          <ListItem>
            Review tooling, dashboards, metrics, and SOPs using a
            company-provided “alli@companyName.com" email address{' '}
          </ListItem>
          <ListItem>
            Core JTBD Scoping: Review existing research and identify “known
            unknowns” Select one “product point of purchase” and one customer
            segment to determine the customer segment we’ll investigate first{' '}
          </ListItem>
          <ListItem>
            Customer Milestone Scoping: We'll find the most painful part of your
            customer journey and investigate what's happening for customers or
            users that stops them from moving forward (i.e. acquisition,
            activation, retention, referral, revenue)
          </ListItem>
        </UnorderedList>
        <QuoteBlock
          quote="Phase 2:"
          author="Find your customers' JTBD and assess what's happening at core lifecycle moments"
        />
        <Text>
          Next we'll execute our investigation into your customers' core JTBD.
          We'll start assessing what could be happening during the moments when
          their progress stops.{' '}
        </Text>
        <UnorderedList>
          <ListItem>
            Recruit participants from your customer base or customers who meet a
            defined set of criteria from a user research recruitment service
            such as respondent.io{' '}
          </ListItem>
          <ListItem>
            Conduct interviews for customers who have recently become paying
            customers of one product
          </ListItem>
          <ListItem>
            {' '}
            Begin analysis of raw voice of customer data (VOC) and discover the
            circumstances and “switch moments” when customers are most likely to
            seek out your solution
          </ListItem>{' '}
          <ListItem>Execute customer journey moment study plans</ListItem>
        </UnorderedList>
        <QuoteBlock
          quote="Phase 3:"
          author="Co-create a plan to ship work that builds your growth foundation"
        />
        <Text>
          We'll mobilize our findings, consider the options we might pursue, and
          co-create a plan to start chipping away and making progress.
        </Text>
        <UnorderedList>
          <ListItem>
            Complete analysis of core JTBD interviews to identify core customer
            job stories
          </ListItem>

          <ListItem>Complete analysis of customer lifecycle breakdown</ListItem>
          <ListItem>
            Insights workshop: Facilitate a follow-up workshop to prioritize the
            findings from our investigation and align on next steps
          </ListItem>
          <ListItem>
            Hypothesis workshop: Co-create a list of experiments to test
          </ListItem>

          <ListItem>
            Project prioritization workshop: Prioritize the experiments and
            projects we identified to come up with an actionable plan
          </ListItem>
        </UnorderedList>
        <Heading size="lg">
          How this approach helped MURAL find their core JTBD and crank their
          growth engine
        </Heading>
        <Text>
          I had the amazing privilege to work with the MURAL team to plan and
          execute “Jobs To Be Done” (JTBD) work. I set up a welcome email with a
          targeted research question that asked users what led them to MURAL
          that received over 1,400 responses. We used the information gathered
          to develop customer success milestones that underpinned the revamped
          onboarding email strategy.
        </Text>
        <Text>
          The insights we found were overwhelmingly conclusive: new customers
          came to MURAL when a meeting that was planned to be held in-person
          became remote. Identifying this insight early meant that by the time
          COVID-19 made the whole world become suddenly remote, MURAL already
          had deep insight into the challenges people would face as they were
          forced to transition to remote work.{' '}
        </Text>
        <Text>
          Not only did this analysis generate key strategic insights, but it
          also meant that the team that hired me could shore up internal support
          for new initiatives with hard numbers AND use it to inform a new
          onboarding projects that drove increased conversion rates of 300%.
        </Text>
        <Heading size="lg">A bit more about me and JTBD:</Heading>
        <UnorderedList>
          <ListItem>
            Jobs to Be Done (JTBD) is the standard of innovation major companies
            and quickly becoming the standard of growth and innvoation across
            the board for SaaS companies.
          </ListItem>
          <ListItem>
            The chance that your competitors are using JTBD to figure out how
            they can help your customers switch to their tool is high and
            growing higher.
          </ListItem>
          <ListItem>
            I have been investigating customer progress and applying it to
            product, marketing, UX, copy, sales, PR, and engineering for a
            decade.
          </ListItem>

          <ListItem>
            The absolute worst outcome of this project is that you keep doing
            all the things that you know are working AND you learn a ton of
            things about your customer that you didn't know and can use to sell
            them more software.
          </ListItem>
        </UnorderedList>
        <Heading size="lg">
          Do you want to know why prospects who *should* become your customers
          actually become your customers?
        </Heading>
        <Text>
          When your best prospects look for a solution to the problem your
          product solves, why don’t they choose you?
        </Text>
        <Text>
          {' '}
          When new users sign up for a trial, what makes them disappear after
          one or two sessions?
        </Text>
        <Text>
          {' '}
          When trialists choose not to upgrade (or paying customers churn after
          a few months), why do they leave? Where do they go? What could you
          have done differently to make them stay?{' '}
        </Text>
        <Text>You might have a hunch about where the breakdown happens.</Text>
        <Text>Do you want to *know?*</Text>
        <Box py={5}>
          <Link href="https://savvycal.com/alli/c0518466">
            <Text color="purple.600" as="strong">
              Click to schedule time with me to see how we can find out
            </Text>
          </Link>
          <QuoteBlock
            quote="We’re able to really cut to the bottom of arguments and have much more productive discussions where the foundation of the decision is not based on the personalities or titles of the people making those decisions. We're able to design experiences that are really for the customer, that delight the customer, enabling us to get the actual numbers that we want."
            author="Jordan Skole, VP Product Engineering, Autobooks"
          />
        </Box>
      </Stack>
    </Layout>
  )
}
