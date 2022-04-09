import './App.css';
import { InitSwAuth } from '@skill-wallet/auth';
import { useEffect } from 'react';
import React from 'react';
import './logo.svg';
import MemberPage from './components/MemberPage/MemberPage';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

function App() {
  useEffect(() => {
    InitSwAuth();
  }, []);

  return (
    <ChakraProvider>
      <div>
        {/* This is where the skill wallet connection goes. Disabling it temporarily. */}
        {/* <sw-auth
          partner-key='f4b83b4c8151fa92acc372a08a78c50ad5cab41f'
          use-dev='true'
          use-button-options='true'
        >
        
        </sw-auth> */}
      </div>
    </ChakraProvider>
  );
}

export default App;
