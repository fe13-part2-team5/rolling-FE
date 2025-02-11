import * as L from "./Header.style";
import { LogoIcon } from "../Icons";

function Logo() {
  return (
    <L.LogoContainer>
      <LogoIcon size={27} />
      <L.LogoText>Rolling</L.LogoText>
    </L.LogoContainer>
  );
}

export default Logo;
