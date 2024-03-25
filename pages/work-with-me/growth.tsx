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
          root causes of revenue-related problems becomes a “someday project”.
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
          </>
        </Text>
        <Text>
          What if you could get off that "someday" timeline and start figuring
          out how to break through that growth plateau today?
        </Text>
        <Heading>
          Let's find the root cause of your growth plateau, get the insights
          that will help you break through it, and figure out what projects will
          get you there fastest
        </Heading>
        <Text>Describe JTBD and what it is</Text>
        <Text>
          JTBD: If you know, you know. If you don't, JTBD is the way to find out
          these things about your customers{' '}
        </Text>
        <UnorderedList>
          <ListItem>When they buy</ListItem>
          <ListItem>How they buy</ListItem>
          <ListItem>What makes them more/less likely to buy</ListItem>
          <ListItem>What's going on in their world</ListItem>
          <ListItem>What they're trying to do</ListItem>
          <ListItem>What they're trying to avoid</ListItem>
          <ListItem>social/emotional/functional</ListItem>
        </UnorderedList>
        <Heading>What you get out of it</Heading>
        <UnorderedList>
          <ListItem>
            Building blocks for your campaigns and product features (VOC)
          </ListItem>
          <ListItem>Insight to help you prioritize</ListItem>
          <ListItem>Insight to help you build</ListItem>
          <ListItem>Insight to help you grow</ListItem>
        </UnorderedList>
        <Heading>Do others like me care?</Heading>
        <Text>Testimonial</Text>
        <Text>Cite a fact about qualitative research</Text>
        <Text>Overview stages of the process</Text>
        <Heading>Timeline</Heading>
        <Text>
          Project timeline: Here is an estimate of our work schedule. It may
          change due to factors including time zones, unforeseen events,
          research participant recruitability, and data availability. During the
          project you can expect weekly touchpoints via email and/or 30-minute
          callls depending on preference/availability. Expect more active
          collaboration time in phase 1 & 3.
        </Text>
        <QuoteBlock
          author="Phase 1: Get your team onboard with your new approach"
          quote=""
        />
        <Text>
          How do you build a strategy that works? Start by gathering as much
          intelligence as you can. We'll begin our work with rigorous analysis
          of the factors contributing to your growth plateau. We'll collect
          intel from your data platforms, from your teammates, and from your
          customers.{' '}
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
        <QuoteBlock author="Phase 2: Find your customers' JTBD" quote="" />

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
          author="Phase 3: Co-create a plan to ship projects based on your work"
          quote=""
        />
        <Text>
          We'll mobilize our findings, consider the options we might pursue, and
          co-create a plan to start chipping away and making progress.
        </Text>
        <UnorderedList>
          <ListItem>
            Complete analysis of core JTBD interviews to identify core customer
            job stories Facilitate a workshop to review findings, listen to
            voice of customer data, and discuss job story artifacts and findings{' '}
          </ListItem>

          <ListItem>Complete analysis of customer lifecycle moment</ListItem>
          <ListItem>
            Insights workshop: Facilitate a follow-up workshop to prioritize the
            findings from our investigation and align on next steps
          </ListItem>
          <ListItem>
            Hypothesis workshop: Co-create a list of experiments to test
            hypotheses
          </ListItem>

          <ListItem>
            Project prioritization workshop: Prioritize the experiments and
            projects we identified to come up with an actionable plan
          </ListItem>
        </UnorderedList>

        <Heading>How will my life improve?</Heading>
        <Text></Text>

        <UnorderedList>
          <ListItem>Teams that do this see 10X growth after</ListItem>
          <ListItem>Stop guessing and know</ListItem>
          <ListItem>
            Get your team shipping based on same customer viewpoint
          </ListItem>
        </UnorderedList>
        <Text>Compared to if you did nothing</Text>
        <UnorderedList>
          <ListItem>Keep guessing</ListItem>
          <ListItem>Keep shipping</ListItem>
          <ListItem>Keep wondering</ListItem>
          <ListItem>Keep throwing money away</ListItem>
        </UnorderedList>
        <Heading>
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
        <Text></Text>
        <UnorderedList>
          <ListItem>
            This is the standard of innovation major companies
          </ListItem>
          <ListItem>I have been doing it for a decade</ListItem>
          <ListItem>
            I have worked in every department at a saas and can tell you how it
            applies and how to mobilize
          </ListItem>
          <ListItem>
            The absolute worst outcome of this project is that you learn a ton
            of things about your customer
          </ListItem>
        </UnorderedList>
        <Box py={5}>
          <Link href="https://savvycal.com/alli/c0518466">
            <Text color="purple.600" as="strong">
              Click to schedule time with me for a meet-and-greet call
            </Text>
          </Link>
        </Box>
      </Stack>
    </Layout>
  )
}
