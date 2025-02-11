import * as H from "./HeaderLogoOnly.style";
import Logo from "./Logo";

function HeaderLogoOnly() {
  return (
    <H.HeaderBox>
      <H.StyledHeader>
        <H.StyledLink to="/">
          <Logo />
        </H.StyledLink>
      </H.StyledHeader>
    </H.HeaderBox>
  );
}

export default HeaderLogoOnly;
