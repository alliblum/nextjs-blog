import { Box, Image } from '@chakra-ui/react'
import Link from 'next/link'
// import Image from 'next/image'

export const Headshot = () => {
  return (
    <Box maxW={'100'}>
      <Link href="/">
        <Image
          src={'/images/alliblum.jpeg'}
          alt={'photo of alli'}
          borderRadius={100}
        />
      </Link>
    </Box>
  )
}

// type LogoProps = {
//   borderRadius: number
// }

// export const Logo = (props: LogoProps) => {
//   return (
//     <Box maxW={'100'}>
//       <Image
//         src={'/media/alliblum.jpeg'}
//         alt={'photo of alli'}
//         borderRadius={props.borderRadius}
//       />
//     </Box>
//   )
// }
