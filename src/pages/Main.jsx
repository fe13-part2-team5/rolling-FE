import Header from "../components/Header/Header";
import {
  Content,
  H2,
  Label,
  Line,
  MoveListButton,
  P,
  Wrapper,
} from "./Main.style";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const handlePrimaryButton = () => {
    navigate("/list");
  };

  return (
    <Wrapper className="main-wrapper">
      <Header />
      <Line />
      <Wrapper className="section-wrap">
        <Content className="section">
          <Wrapper className="txt-box-01">
            <Label>Point. 01</Label>
            <Wrapper className="txt-area">
              <H2>
                누구나 손쉽게, 온라인 <br />
                롤링 페이퍼를 만들 수 있어요
              </H2>
              <P>로그인 없이 자유롭게 만들어요.</P>
            </Wrapper>
          </Wrapper>
          <Wrapper className="img-box fixed-right-img-box">
            <Content className="img-01" />
          </Wrapper>
        </Content>
        <Content className="section reverse-section">
          <Wrapper className="txt-box-02">
            <Label>Point. 02</Label>
            <Wrapper className="txt-area">
              <H2 className="txt-box-02-h2">
                서로에게 이모지로 감정을 <br />
                표현해보세요
              </H2>
              <P>롤링 페이퍼에 이모지를 추가할 수 있어요.</P>
            </Wrapper>
          </Wrapper>
          <Wrapper className="img-box">
            <Content className="img-02" />
          </Wrapper>
        </Content>
      </Wrapper>
      <Wrapper className="buttonWrapper">
        <MoveListButton onClick={handlePrimaryButton}>
          구경해보기
        </MoveListButton>
      </Wrapper>
    </Wrapper>
  );
}

export default Main;
