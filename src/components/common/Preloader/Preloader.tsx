import * as Image from "assets";

import * as Styles from "./styles";

const Preloader = () => {
  return (
    <Styles.Wrapper>
      <Styles.Image src={Image.GearLogo} alt="Logo" />
    </Styles.Wrapper>
  );
};

export { Preloader };
