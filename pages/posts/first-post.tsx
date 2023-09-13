import Link from 'next/link';
import { Box } from '@chakra-ui/react';

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <Box bg="gray.100">
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      </Box>
    </>
  );
}
