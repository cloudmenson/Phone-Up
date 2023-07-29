import { Link, Flex, Spacer, Box, Text, Img } from "@chakra-ui/react";

import { Logo } from "assets";

import * as Styles from "./styles";

const Footer = () => {
  return (
    <Styles.Footer>
      <Flex
        sx={{
          padding: "3px 0",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Link href="#">
            <Img src={Logo} height="75px" width="155px" alt="Phone Up" />
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Text
            fontSize={{
              sm: "14px",
              lg: "16px",
              base: "10px",
            }}
          >
            © 2022 COPYRIGHTS BY PHONE UP - ALL RIGHTS RESERVED.
          </Text>
        </Box>
        <Box>
          <Styles.LinkTo
            spy={true}
            smooth={true}
            duration={600}
            to="header-section"
          >
            <Styles.ArrowUpLink />
          </Styles.LinkTo>
        </Box>
      </Flex>
    </Styles.Footer>
  );
};

export { Footer };
