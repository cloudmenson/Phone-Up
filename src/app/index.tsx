import { ChakraProvider } from "@chakra-ui/react";

import { MainPage, Header, Footer } from "components";
import { GlobalStyles } from "styles/globalStyles";

// import * as Styles from "./styles";

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
