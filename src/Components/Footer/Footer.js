import {Link} from "@chakra-ui/react";
import {Link as ScrollLink} from "react-scroll";
import {
  Flex,
  Spacer,
  Box,
  Text,
  Img
} from "@chakra-ui/react";
import Logo from "../../assets/img/logo.svg";
import {AiOutlineArrowUp} from "react-icons/ai";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="App__footer">
      <Flex sx={
        {
          alignItems: "center",
          textAlign: "center",
          padding: "3px 0"
        }
      }>
        <Box>
          <Link>
            <Img className="App__footer-logo" href="#"
              src={Logo}
              height="75px"
              width="155px"
              alt="Phone Up"/>
          </Link>
        </Box>
        <Spacer/>
        <Box>
          <Text fontSize={
            {
              base: "10px",
              sm: "14px",
              lg: "16px"
            }
          }>
            © 2022 COPYRIGHTS BY PHONE UP - ALL RIGHTS RESERVED.
          </Text>
        </Box>
        <Box>
          <ScrollLink className="App__footer-link" to="header-section"
            spy={true}
            smooth={true}
            duration={600}>
            <AiOutlineArrowUp className="App__footer-arrow-up"/>
          </ScrollLink>
        </Box>
      </Flex>
    </footer>
  );
};

export default Footer;
