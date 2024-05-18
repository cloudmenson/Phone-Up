import { IconButton } from "@chakra-ui/react";
import { PhoneIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Img,
  Link,
  Flex,
  Text,
  Menu,
  Spacer,
  MenuItem,
  MenuList,
  Breadcrumb,
  MenuButton,
  BreadcrumbItem,
} from "@chakra-ui/react";

import * as Image from "assets";

import * as Styles from "./styles";

const Header = () => {
  return (
    <Styles.Header id="header-section">
      <Flex
        sx={{
          padding: "10px 0",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Link href="/">
            <Img src={Image.Logo} height="75px" width="155px" alt="Phone-Up" />
          </Link>
        </Box>
        <Spacer />
        <Styles.HeaderLinks sx={{ fontWeight: "600" }}>
          <Breadcrumb>
            <BreadcrumbItem>
              <Styles.LinkTo
                spy={true}
                smooth={true}
                duration={600}
                to="about-us-section"
              >
                <Text
                  fontSize={{
                    lg: "18px",
                    base: "15px",
                  }}
                >
                  Про нас
                </Text>
              </Styles.LinkTo>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Styles.LinkTo
                spy={true}
                smooth={true}
                duration={1000}
                to="services-section"
              >
                <Text
                  fontSize={{
                    lg: "18px",
                    base: "15px",
                  }}
                >
                  Послуги
                </Text>
              </Styles.LinkTo>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Styles.LinkTo
                spy={true}
                smooth={true}
                duration={1000}
                to="contacts-section"
              >
                <Text
                  fontSize={{
                    base: "15px",
                    lg: "18px",
                  }}
                >
                  Контакти
                </Text>
              </Styles.LinkTo>
            </BreadcrumbItem>
          </Breadcrumb>
        </Styles.HeaderLinks>
        <Spacer />
        <Styles.PhoneWrapper sx={{ fontWeight: "600" }}>
          <Link
            fontSize={{
              lg: "18px",
              base: "15px",
            }}
            href="tel:+380638365582"
            sx={{
              padding: "0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PhoneIcon sx={{ margin: "0 6px" }} />
            063-836-55-82
          </Link>
        </Styles.PhoneWrapper>
        <Styles.Box
          sx={{
            color: "black",
            marginLeft: "15px",
          }}
        >
          <Menu>
            <MenuButton
              as={IconButton}
              variant="outline"
              aria-label="Options"
              icon={<HamburgerIcon />}
            />
            <MenuList>
              <MenuItem>
                <Styles.LinkTo
                  spy={true}
                  smooth={true}
                  duration={600}
                  to="about-us-section"
                  style={{ width: "100%" }}
                >
                  <Text
                    fontSize={{
                      sm: "15px",
                      md: "15px",
                      lg: "22px",
                    }}
                  >
                    Про нас
                  </Text>
                </Styles.LinkTo>
              </MenuItem>
              <MenuItem>
                <Styles.LinkTo
                  spy={true}
                  smooth={true}
                  duration={1000}
                  to="contacts-section"
                  style={{ width: "100%" }}
                >
                  <Text
                    fontSize={{
                      sm: "15px",
                      md: "15px",
                      lg: "22px",
                    }}
                  >
                    Контакти
                  </Text>
                </Styles.LinkTo>
              </MenuItem>
              <MenuItem>
                <Link
                  fontSize={{
                    sm: "15px",
                    md: "15px",
                    lg: "22px",
                  }}
                  href="tel:+380638365582"
                  sx={{
                    padding: "0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <PhoneIcon sx={{ margin: "0 6px" }} />
                  063-836-55-82
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  fontSize={{
                    sm: "15px",
                    md: "15px",
                    lg: "22px",
                  }}
                  href="tel:+380679712315"
                  sx={{
                    padding: "0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <PhoneIcon sx={{ margin: "0 6px" }} />
                  067-971-23-15
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  fontSize={{
                    sm: "15px",
                    md: "15px",
                    lg: "22px",
                  }}
                  href="tel:+380951544336"
                  sx={{
                    padding: "0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <PhoneIcon sx={{ margin: "0 6px" }} />
                  095-154-43-36
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Styles.Box>
      </Flex>
    </Styles.Header>
  );
};

export { Header };
