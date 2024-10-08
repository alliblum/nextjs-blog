// import { Headshot } from './headshot'
// import { Box, Flex, HStack, Spacer, Stack } from '@chakra-ui/react'
import Link from 'next/link'

// export const NavBar = () => {
//   return (
//     <Flex mx={2} my={10} justify="spacebetween" align="center">
//       <Headshot />
//       <Spacer />
//       <Box>
//         <Stack as="strong" textAlign="right" direction="column" spacing={4}>
//           <Link href="/research-buy-in">
//             Free Email Course: Get Buy-In on VOC
//           </Link>
//           <Link href="/work-with-me">Work With Me</Link>

//           {/* <Link href="/about">About</Link> */}
//         </Stack>
//       </Box>
//     </Flex>
//   )
// }

import { Headshot } from './headshot'

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Spacer,
  Center,
} from '@chakra-ui/react'
// import {
//   HamburgerIcon,
//   CloseIcon,
//   ChevronDownIcon,
//   ChevronRightIcon,
// } from '@chakra-ui/icons'

import {
  TbBaselineDensityMedium,
  TbX,
  TbArrowBadgeRight,
  TbArrowBadgeDown,
  TbBox,
} from 'react-icons/tb'

export const NavBar = () => {
  return (
    <Box>
      <WithSubnavigation />
    </Box>
  )
}

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Box
      mx={2}
      my={10}
      bg={useColorModeValue('white', 'gray.800')}
      color={useColorModeValue('gray.600', 'white')}
      minH={'60px'}
      borderBottom={{ base: '1px', md: 'none' }}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
      as="header"

      // // justify="spacebetween"
      // `align="center"
    >
      <Flex display={{ base: 'flex', md: 'flex' }} px={0}>
        <Link href="/">
          <Text as="span" fontWeight="600">
            ALLI BLUM
          </Text>
        </Link>
        <Spacer />
        <Flex>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            display={{ base: 'flex', md: 'none' }}
            mt={-2}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <TbX width={3} height={3} />
                ) : (
                  <TbBaselineDensityMedium width={5} height={5} />
                )
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

// export default function WithSubnavigation() {
//   const { isOpen, onToggle } = useDisclosure()

//   return (
//     <Box width="100%">
//       <Flex
//         bg={useColorModeValue('white', 'gray.800')}
//         color={useColorModeValue('gray.600', 'white')}
//         minH={'60px'}
//         py={{ base: 2 }}
//         px={{ base: 4 }}
//         mt={-12}
//         // pt={{ base: '6', md: 'none' }}
//         // pb={{ base: '3', md: 'none' }}
//         // px={{ base: '6', md: 'none' }}
//         justifyContent={'space-between'}
//         borderBottom={1}
//         borderStyle={'solid'}
//         borderColor={useColorModeValue('gray.200', 'gray.900')}
//         align={'center'}
//         as="header"
//         width="100%"
//         position="fixed"
//         wrap="wrap"
//       >
//         <Flex display={{ base: 'none', md: 'flex' }} px={0}>
//           <Link href="/">
//             <Text as="span" fontWeight="600">
//               ALLI BLUM
//             </Text>
//           </Link>

//           <Spacer />

//           <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
//             <DesktopNav />
//           </Flex>
//         </Flex>

//         <Flex display={{ base: 'flex', md: 'none' }} px={0}>
//           {/* <Flex>
//             <Link href="/">
//               <Text as="span" fontWeight="600">
//                 ALLI BLUM
//               </Text>
//             </Link> */}
//           {/* <Spacer />{' '} */}
//           <IconButton
//             mt={-2}
//             onClick={onToggle}
//             icon={
//               isOpen ? (
//                 <TbX width={3} height={3} />
//               ) : (
//                 <TbBaselineDensityMedium width={5} height={5} />
//               )
//             }
//             variant={'ghost'}
//             aria-label={'Toggle Navigation'}
//           />
//           {/* </Flex> */}
//         </Flex>
//       </Flex>

//       <Collapse in={isOpen} animateOpacity>
//         <MobileNav />
//       </Collapse>
//     </Box>
//   )
// }

// {
/* <Flex
            flex={{ base: 1, md: 'auto' }}
            display={{ base: 'flex', md: 'none' }}
            mt={-2}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <TbX width={3} height={3} />
                ) : (
                  <TbBaselineDensityMedium width={5} height={5} />
                )
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
        </Box>
      </Flex> */

{
  /* <Flex >
        <Box>
          <Link href="/">
            <Text as="span" fontWeight="600">
              ALLI BLUM
            </Text>
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Flex display={{ base: 'none', md: 'flex' }} px={0}>
            <DesktopNav />
          </Flex>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            display={{ base: 'flex', md: 'none' }}
            mt={-2}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <TbX width={3} height={3} />
                ) : (
                  <TbBaselineDensityMedium width={5} height={5} />
                )
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
        </Box>
      </Flex> */
}

{
  /* <Flex
          flex={{ base: 1 }}
          justify={{ base: 'center', md: 'start' }}
          align="bottom"
        > */
}
{
  /* <Flex
            // display={{ base: 'flex', md: 'none' }}
            flex={{ base: 1 }}
            justify={{ base: 'inline', md: 'start' }}
            // position="relative"
            // alignContent={{ base: 'initial', md: 'center' }}
            // align="bottom"
          > */
}
{
  /* <Link href="/">
              <Text as="span" fontWeight="600">
                ALLI BLUM
              </Text>
            </Link>
          </Flex> */
}

{
  /* <Spacer />
          <Flex
            display={{ base: 'none', md: 'contents' }}
            justify={{ md: 'right' }}
          >
            <DesktopNav />
          </Flex> */
}

{
  /* <Flex
            justify={{ base: 'right' }}
            // align={{ base: 'right', md: 'bottom' }}
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
          > */
}
{
  /* <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <TbX width={3} height={3} />
                ) : (
                  <TbBaselineDensityMedium width={5} height={5} />
                )
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            /> */
}
{
  /* </Flex>
        </Flex> */
}

{
  /* <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        > */
}
{
  /* <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}
          >
            Sign In
          </Button> */
}
{
  /* <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            href={'#'}
            _hover={{
              bg: 'pink.300',
            }}
          >
            Sign Up
          </Button> */
}
{
  /* </Stack> */
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box
      as="a"
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('purple.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'purple.400' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'purple.400'} w={5} h={5} as={TbArrowBadgeRight} />
        </Flex>
      </Stack>
    </Box>
  )
}

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Stack direction="row">
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}
          >
            {label}
          </Text>
          {children && (
            <Icon
              as={TbArrowBadgeDown}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Stack>
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'About',
    children: [
      {
        label: 'Appearances',
        subLabel: 'Speaking engagements and podcast guest appearances',
        href: '/about/appearances',
      },
    ],
  },
  {
    label: 'Work With Me',
    href: '/work-with-me',
  },
  {
    label: 'Free Email Course: Get Buy-in on VOC',
    href: '/research-buy-in',
  },
]
