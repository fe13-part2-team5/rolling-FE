import HeaderButton from "./HeaderButton";
import Logo from "./Logo";
import * as H from "./Header.style";

//각 페이지에서 Header 불러오기
function Header() {
  return (
    <H.HeaderBox>
      <H.StyledHeader>
        <H.StyledLink to="/">
          <Logo />
        </H.StyledLink>

        <H.StyledLink to="/Post">
          <HeaderButton />
        </H.StyledLink>
      </H.StyledHeader>
    </H.HeaderBox>
  );
}

export default Header;
