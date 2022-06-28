import { Link } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import {
  Flex,
  Spacer,
  Box,
  Img,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import Logo from "../../assets/img/logo.svg";
import { IconButton } from "@chakra-ui/react";
import { PhoneIcon, HamburgerIcon } from "@chakra-ui/icons";
import "./Header.css";

export const Header = () => {
  return (
    <header className="App__header" id="header-section">
      <Flex
        sx={{ alignItems: "center", textAlign: "center", padding: "10px 0" }}
      >
        <Box>
          <Link>
            <Img
              width={{ base: "150px" }}
              className="App__header-logo"
              href="#"
              src={Logo}
              alt="Phone Up"
            />
          </Link>
        </Box>
        <Spacer />
        <Box sx={{ fontWeight: "600" }} className="App__header-links">
          <Breadcrumb>
            <BreadcrumbItem>
              <ScrollLink
                className="App__header-link"
                to="about-us-section"
                spy={true}
                smooth={true}
                duration={600}
              >
                <Text fontSize={{ base: "15px", lg: "18px" }}>Про нас</Text>
              </ScrollLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <ScrollLink
                className="App__header-link"
                to="services-section"
                spy={true}
                smooth={true}
                duration={1000}
              >
                <Text fontSize={{ base: "15px", lg: "18px" }}>Послуги</Text>
              </ScrollLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <ScrollLink
                className="App__header-link"
                to="contacts-section"
                spy={true}
                smooth={true}
                duration={1000}
              >
                <Text fontSize={{ base: "15px", lg: "18px" }}>Контакти</Text>
              </ScrollLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Spacer />
        <Box
          className="App__header-phone-number-box"
          sx={{ fontWeight: "600" }}
        >
          <Link
            fontSize={{ base: "15px", lg: "18px" }}
            className="App__header-link-number App__header-link"
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              padding: "0",
            }}
            href="tel:+380638365582"
          >
            <PhoneIcon sx={{ margin: "0 6px" }} />
            063-836-55-82
          </Link>
        </Box>
        <Box
          className="App__main-burger-menu"
          sx={{ color: "black", marginLeft: "15px" }}
        >
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem>
                <ScrollLink
                  className="App__header-link"
                  to="about-us-section"
                  spy={true}
                  smooth={true}
                  duration={600}
                >
                  <Text fontSize={{ sm: "15px", md: "15px", lg: "22px" }}>
                    Про нас
                  </Text>
                </ScrollLink>
              </MenuItem>
              <MenuItem>
                <ScrollLink
                  className="App__header-link"
                  to="contacts-section"
                  spy={true}
                  smooth={true}
                  duration={1000}
                >
                  <Text fontSize={{ sm: "15px", md: "15px", lg: "22px" }}>
                    Контакти
                  </Text>
                </ScrollLink>
              </MenuItem>
              <MenuItem>
                <Link
                  fontSize={{ sm: "15px", md: "15px", lg: "22px" }}
                  className="App__header-link-number App__header-link"
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    padding: "0",
                  }}
                  href="tel:+380638365582"
                >
                  <PhoneIcon sx={{ margin: "0 6px" }} />
                  063-836-55-82
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </header>
  );
};

export default Header;
