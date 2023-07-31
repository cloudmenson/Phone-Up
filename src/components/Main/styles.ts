import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { Flex as FlexBox, Box as Boxes } from "@chakra-ui/react";

export const Main = styled.main`
  padding: 100px 40px 0;
  background-color: #0e0e0e;

  @media (max-width: 425px) {
    padding: 100px 20px 0;
  }
`;

export const HeadingWithLine = styled.span`
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 60%;
    height: 2px;
    margin-left: -30%;
    background: #800b0b;
  }

  @media (max-width: 991px) {
    &::after {
      bottom: 8px;
    }
  }
`;

export const LinkTo = styled(ScrollLink)`
  padding: 18px 10px;
  background: #800b0b;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1px;

  &:hover {
    background: #6a0909;
    cursor: pointer;
  }

  @media (max-width: 991px) {
    padding: 20px 25px;
    border-radius: 10px;
    font-size: 10px;
  }
`;

export const Flex = styled(FlexBox)`
  padding: 200px 0 50px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 1440px) {
    align-items: center;
  }
`;

export const Box = styled(Boxes)`
  @media (max-width: 479px) {
    display: none;
  }
`;
