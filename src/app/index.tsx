import { ChakraProvider } from "@chakra-ui/react";

import { HomePage } from "components/pages/homePage";
import { GlobalStyles } from "styles/globalStyles";

import * as Styles from "./styles";

const App = () => {
  return (
    <ChakraProvider>
      <GlobalStyles />
      <Styles.Wrapper>
        <HomePage />
      </Styles.Wrapper>
    </ChakraProvider>
  );
};

export { App };
