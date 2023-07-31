import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Flex as FlexBox } from "@chakra-ui/react";

export const Footer = styled.footer`
  padding: 20px;
  background: rgb(187, 63, 54);
  background: linear-gradient(
    335deg,
    rgba(187, 63, 54, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#bb3f36",endColorstr="#ffffff",GradientType=1);
`;

export const Flex = styled(FlexBox)`
  @media (max-width: 768px) {
    flex-direction: column !important;
  }
`;

export const LinkTo = styled(ScrollLink)`
  box-shadow: none !important;
  color: #000000;

  :hover {
    color: #ffffff;
    cursor: pointer;
  }
`;

export const ArrowUpLink = styled(AiOutlineArrowUp)`
  margin-left: 40px;
  width: 50px;
  height: 50px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 15px;
    width: 40px;
    height: 40px;
  }
`;
