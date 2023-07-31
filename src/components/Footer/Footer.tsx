import { Link, Box, Text, Img } from "@chakra-ui/react";

import { Logo } from "assets";

import * as Styles from "./styles";

const Footer = () => {
  return (
    <Styles.Footer>
      <Styles.Flex
        sx={{
          textAlign: "center",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Link href="/">
            <Img src={Logo} width="155px" height="75px" alt="Phone Up" />
          </Link>
        </Box>
        <Box>
          <Text
            fontWeight={500}
            textTransform={"uppercase"}
            fontSize={{
              sm: "14px",
              lg: "16px",
              base: "12px",
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
      </Styles.Flex>
    </Styles.Footer>
  );
};

export { Footer };
