import { ChakraProvider } from "@chakra-ui/react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import reportWebVitals from "./reportWebVitals";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <ChakraProvider>
        <Header />
        <Main />
        <Footer />
      </ChakraProvider>
    </div>
  );
}

reportWebVitals();
