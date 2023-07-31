import { ChakraProvider } from "@chakra-ui/react";

import { MainPage, Header, Footer } from "components";
import { GlobalStyles } from "styles/globalStyles";

const App = () => {
  return (
    <ChakraProvider>
      <GlobalStyles />
      <Header />
      <MainPage />
      <Footer />
    </ChakraProvider>
  );
};

export { App };
