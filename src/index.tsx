import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import { Preloader } from "components";
import { GlobalStyles } from "styles/globalStyles";

const Application = React.lazy(() =>
  import("app").then((module) => ({ default: module.App }))
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <GlobalStyles />
      <Suspense fallback={<Preloader />}>
        <Application />
      </Suspense>
    </ChakraProvider>
  </React.StrictMode>
);
