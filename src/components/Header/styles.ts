import { styled } from "styled-components";
import { Link as ScrollLink } from "react-scroll";

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
`;

export const LinkTo = styled(ScrollLink)`
  box-shadow: none !important;
  padding: 0 15px;

  :hover {
    cursor: pointer;
    color: #000000;
  }
`;

// .App__main-burger-menu {
//   display: none;
// }

// @media (max-width: 768px) {
//   .App__main-burger-menu {
//     display: inline-block;
//   }
//   .App__header-links {
//     display: none;
//   }
// }

// @media (max-width: 425px) {
//   .App__header {
//     padding: 0 20px;
//   }

//   .App__header-phone-number-box {
//     display: none;
//   }
// }
