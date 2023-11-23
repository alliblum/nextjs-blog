import * as NextMdx from '@next/mdx'

const withMDX = NextMdx.default({
  extension: /\.mdx?$/,

  options: {
    remarkPlugins: [],
    reHypePlugins: [],
  },
})

// const withMDX = require('@next/mdx')({
//   options: {
//     remarkPlugins: [],
//     rehypePlugins: [],
//   },
// })

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // experimental: {
  //   appDir: true,
  // },
  // // Optionally, add any other Next.js config below
  // reactStrictMode: true,
}
export default nextConfig

// export default withMDX(nextConfig)

// module.exports = {
//   typescript: {
//     // !! WARN !!
//     // Dangerously allow production builds to successfully complete even if
//     // your project has type errors.
//     // !! WARN !!
//     ignoreBuildErrors: true,
//   },
// }

// import nextMDX from '@next/mdx'

// const withMDX = require('@next/MDX')({
//   options: {
//     providerImportSource: '@mdx-js/react',
//   },
// })

// export default withMDX({
//   pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
// })

// import nextMDX from 'next/mdx'

// const withMDX = nextMDX({
//   options: {
//     providerImportSource: '@mdx-js/react',
//   },
// })

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Configure `pageExtensions`` to include MDX files
//   pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
//   // Optionally, add any other Next.js config below
// }

// module.exports = withMDX(nextConfig)
