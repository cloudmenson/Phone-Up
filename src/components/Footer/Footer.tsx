import { Link, Box, Text, Img } from "@chakra-ui/react";

import * as Image from "assets";

import * as Styles from "./styles";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
            <Img src={Image.Logo} width="155px" height="75px" alt="Phone Up" />
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
            © {currentYear} COPYRIGHTS BY PHONE UP - ALL RIGHTS RESERVED.
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
