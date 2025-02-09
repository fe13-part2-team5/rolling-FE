import Header from "../components/Header/Header";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { Content, H2, Label, Line, P, Wrapper } from "./Main.style";
import { useNavigate } from "react-router-dom";

function Main() {
  const test = () => {
    console.log("확인");
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
              <H2 className="h2-txt01">
                누구나 손쉽게, 온라인
                <br />
                롤링 페이퍼를 만들 수 있어요
              </H2>
              <P className="p-txt01">로그인 없이 자유롭게 만들어요.</P>
            </Wrapper>
          </Wrapper>
          <Content className="img sample01"></Content>
        </Content>
        <Content className="section reverse-section">
          <Wrapper className="txt-box-02">
            <Label>Point. 02</Label>
            <Wrapper className="txt-area">
              <H2 className="h2-txt02">
                서로에게 이모지로 감정을
                <br />
                표현해보세요
              </H2>
              <P className="p-txt02">
                롤링 페이퍼에 이모지를 추가할 수 있어요.
              </P>
            </Wrapper>
          </Wrapper>
          <Content className="img"></Content>
        </Content>
      </Wrapper>
      <Wrapper className="buttonWrapper">
        <PrimaryButton width="280px" onClick={test}>
          구경해보기
        </PrimaryButton>
      </Wrapper>
    </Wrapper>
  );
}

export default Main;
