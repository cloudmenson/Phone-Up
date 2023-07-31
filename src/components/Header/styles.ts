import { styled } from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { Box as Boxes } from "@chakra-ui/react";

export const Header = styled.header`
  padding: 0 40px;
  background: rgb(187, 63, 54);
  background: -moz-linear-gradient(
    320deg,
    rgba(187, 63, 54, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  background: -webkit-linear-gradient(
    320deg,
    rgba(187, 63, 54, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  background: linear-gradient(
    320deg,
    rgba(187, 63, 54, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#bb3f36",endColorstr="#ffffff",GradientType=1);

  @media (max-width: 425px) {
    padding: 0 20px;
  }
`;

export const HeaderLinks = styled(Boxes)`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LinkTo = styled(ScrollLink)`
  box-shadow: none !important;
  padding: 0 15px;

  :hover {
    cursor: pointer;
    color: #000000;
  }
`;

export const Box = styled(Boxes)`
  display: none;

  @media (max-width: 768px) {
    display: inline-block;
  }
`;

export const PhoneWrapper = styled(Boxes)`
  @media (max-width: 768px) {
    display: none;
  }

  a {
    &:hover {
      color: black;
    }
  }
`;
