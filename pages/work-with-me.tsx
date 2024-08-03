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
import JordanSkole2 from 'components/testimonials/jordan-skole-2'
import AsiaOrangio from 'components/testimonials/asia-orangio'
import ClaireSuellentrop from 'components/testimonials/claire-suellentrop'

export default function WorkWithMe() {
  return (
    <Layout home>
      <Stack spacing={5}>
        <Heading fontStyle="italic" size="md">
          Get the data you need to align around a single shared understanding of
          your customer
        </Heading>
        <Heading fontStyle="italic" size="md">
          And get the buy-in you to mobilize those insights to every department
          that touches a customer interaction
        </Heading>
        <Heading>What kind of meetings do you want to be in next year?</Heading>
        <Text>Do you want to be in ones like you are in now?</Text>
        <Text>
          Where people dismiss your project because they “don’t like it”?
        </Text>
        <Text>
          Where people ask for your help at the last minute to market a new
          feature that literally no one has said they want?
        </Text>
        <Text>
          Where half the people in the room have one ICP in mind, half the
          people have a different ICP in mind, and half don’t even know what an
          ICP is or that having an ICP would pour literal gasoline on their
          growth projects?
        </Text>
        <Text>
          Where no one is grasping your pitch to do JTBD research or incorporate
          the research you already have into product and marketing decisions?
        </Text>
        <Text>
          Where you agree to work on whatever cockamamy idea some ding dong
          cooked up because they heard someone on a podcast explain how it
          worked in a completely different type of business?
        </Text>
        <Text>
          Where you leave these zoom meetings only to find yourself sitting
          there, pondering the gap between your Obvious Brilliance and potential
          for leading a blockbuster team at an even bigger blockbuster company?
        </Text>
        <Heading>Or do you want to be in a different kind of meeting?</Heading>
        <Text>
          Do you want to be in ones where you actually get buy-in for your VOC
          projects, without fighting tooth and nail with the entire org?
        </Text>
        <Text>
          Actually, forget about "buy-in" -- do you want to be in prioritization
          meetings where everyone else is using VOC just like you are, showing
          up with a deck of juicy qualitative data with their numbers before a
          single project gets assigned to this quarter’s roadmap?
        </Text>
        <Text>
          Do you want to be in pairing sessions where you're not only in flow
          with your counterparts in sales, product, marketing, or engineering,
          collaborating joyfully with your colleagues, Yes-anding your way to
          higher activation and retention numbers?
        </Text>
        <Text>
          Or how about a executive meeting preso called “Job 2 activation
          project” where everyone in the room knows in detail *exactly* what
          circumstances a Job 2 user is in when they start searching for your
          product *before* they start giving baseless feedback that proves how
          out of touch they are?
        </Text>
        <Text>
          An executive planning session where you and your counterparts in
          product and marketing are talking about how to execute against a
          shared campaign, without bickering about who’s doing what?
        </Text>
        <Text>
          An ops meeting called “Plan new VOC intake pipe” because you are
          drowning in so much voice of customer data building on your initial
          JTBD research and spread across teams, email, meetings, confluence,
          hubspot, and powerpoint that now your biggest problem is getting the
          right data, not losing track of insights?
        </Text>
        <Heading size="lg">
          I help leaders like you get the customer insights you need to have get
          everyone to agree on who your customer is.{' '}
        </Heading>
        <Heading size="md">
          And just as important: I help you get the change management skills you
          need to bring insights to a team that doesn't use them, even if you've
          already tried and failed.
        </Heading>
        <Text>
          Because it's hard enough to get buy-in on *doing* customer research.
        </Text>
        <Text>It's even harder to get buy-in on using them.</Text>
        <Text>
          And if you don't have a change management plan in place before you
          start your research, you can forget about other people using insights
          in their decision-making.
        </Text>

        {/* <Heading size="xl">
          Innovation, Growth, and Leadership Strategy for Scale-ups
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

        <Text>
          I work with companies as a solo consultant under the umbrella of my
          consulting brand, Hypothesis Department.
        </Text> */}

        <Center my="10">
          <Link href="https://savvycal.com/alli/c0518466">
            <Heading size="lg" color="purple.600" as="strong">
              Book an intro call
            </Heading>
          </Link>
        </Center>
        {/* <Heading>
          Get aligned and stay aligned as your company goes from startup to
          scale-up -- without compromising your vision
        </Heading> */}
        {/* <Text>
          I've observed the projects and frameworks outlined below to be among
          the most effective starting lines for our work together. I'd love to
          hear what's going on in your business to find the right place to begin
          our work.
        </Text> */}
        {/* <Offer
          title="Innovation Strategy & Prototyping"
          subtitle="DESCRIBE IT"
          description="Two tracks of research + prototyping to uncover and validate new growth opportunities. We'll start with a research sprint to uncover the best opportunities for growth and then move into a prototyping sprint to validate those opportunities. You'll get a clear understanding of the best opportunities for growth and a prototype to test those opportunities with your customers."
          path="/work-with-me/innovation"
          linkText="Learn more about Innovation Strategy & Prototyping"
        /> */}
        <Offer
          title="Workshop: Is JTBD right for me?"
          subtitle="A half-day workshop to give you and your team a taste of Jobs To Be Done"
          description="If you've heard about JTBD and aren't sure if it's right for you or you ARE sure that you want to bring JTBD to your organization but you need help building a cast for it, this workshop will help you build a foundational understanding with your team."
          path="/work-with-me/intro-to-jtbd"
          linkText="Click to learn more"
        />
        <Offer
          title="R&D Consulting: Find your ICP"
          subtitle="A deep intensive analysis of the qualities that differentiate an average customer from an ideal one."
          description="We'll blend a mix of qualitative and quantitative data plus your team's unique unfair advantages to build a dynamic ICP and a plan to mobilize it across your organization."
        />
        <Offer
          title="Insights Mobilization Pairing"
          subtitle="Team and 1:1 Coaching"
          description="We'll meet to develop and ship a strategy to mobilize your JTBD research so you can put an end to watching your numbers go down because someone in another department doesn't share your POV on who your customer is."
        />
        {/* <Offer
          title="Break through growth plateaus"
          subtitle="Jobs To Be Done + Change Management for Scale-Ups"
          description="Let's find the root cause of your growth plateau, get the insights to break through it, and decide what projects set you up for long term scaleable, predictable growth."
          path="/work-with-me/growth"
          linkText="Click to learn more"
        /> */}
        {/* <Offer
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
        <Spacer /> */}
        {/* <Offer
          title="Fractional Head of Product, Growth, Strategy, Innovation, and/or Operations"
          subtitle="AKA, an advisor who does stuff."
          description="I'll join you as an embedded member of your leadership team to find 
          and mobilize the growth & innovation opportunities and then work with your team 
          to execute them and increase your acquisition, activation, and retention metrics.
          We'll build the systems and processes to stay aligned as you grow and scale. 
          I work with a very limited number of teams in this capacity. I am a multidisciplinary cross functional Jack of All Trades - the title will give us a way to position me to your team but the work will be the same regardless."
        ></Offer> */}
        <Spacer />
        {/* <Offer
          title="Diagnostic Assessment"
          subtitle="Two Hour Working Session to uncover the possible root causes of your growth challenges"
          description="If you're not share where to start, start here. We'll meet for a diagnostic session to talk about what's going on in your business, review data, and weigh tradeoffs."
          path="https://savvycal.com/alli/diagnostic"
          linkText="Click to book a working session"
        /> */}
        <Spacer />
        <JordanSkole2 />
        <Spacer />
        <AsiaOrangio />
        <Spacer />
        <ClaireSuellentrop />
      </Stack>
    </Layout>
  )
}
