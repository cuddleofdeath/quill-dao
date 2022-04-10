import { Box, Image } from '@chakra-ui/react';

export default function Banner() {
  return (
    <header>
      <Box>
        <Box
          d='flex'
          align='center'
          justify='space-between'
          ml={6}
          mr={6}
          color='#000000'
          boxShadow='xl'
        >
          <Image
            boxSize='150px'
            src='/images/quilldaologo.png'
            alt='image'
            boxShadow='xl'
          />

          <Box align='center' mt={15} boxShadow='xl'>
            QuillDAO aims to empower writers by providing them with the
            mentorship and resources that they need to become successful content
            writers.
          </Box>
        </Box>

        <Box></Box>
      </Box>
    </header>
  );
}
