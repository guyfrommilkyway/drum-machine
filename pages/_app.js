// import packages below
import { ChakraProvider } from '@chakra-ui/react';

// import utils below
import { MachineContextProvider } from '@/store/machine-context';

// import assets below
import '../styles/global.scss';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <MachineContextProvider>
          <Component {...pageProps} />
        </MachineContextProvider>
      </ChakraProvider>
      <script src='https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js'></script>
    </>
  );
}
