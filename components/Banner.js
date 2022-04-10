import { Box, Image, Button } from '@chakra-ui/react';
import { GiScrollQuill } from 'react-icons/gi';
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
            boxSize='200px'
            src='/images/quilldaologo.png'
            alt='image'
            boxShadow='xl'
          />

          <Box align='center' mt={15} boxShadow='xl'>
            If this sounds like a great fit for you, please visit our Member's
            Page to get started with creating a decentralized account.
            <Box>
              <Button
                rightIcon={<GiScrollQuill />}
                colorScheme='blue'
                variant='outline'
              >
                Member's Page
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </header>
  );
}
