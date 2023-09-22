import React from 'react'
import { Nav } from '../components/Nav'

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  )
}

// export const Layout = () => {
//   return (
//     <div>
//       {children}
//       <Flex mx={10} my={10} justify="spacebetween" align="center">
//         <Nav />
//       </Flex>
//     </div>
//   )
// }

// export const layout = () => {
//   return (
//     <Flex mx={10} my={10} justify="spacebetween" align="center">
//       <Nav />
//     </Flex>
//   )
// }
