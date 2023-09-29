import { Box, Image } from '@chakra-ui/react'
// import Image from 'next/image'

export const Logo = () => {
  return (
    <Box maxW={'100'}>
      <Image
        src={'/images/alliblum.jpeg'}
        alt={'photo of alli'}
        borderRadius={100}
      />
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
