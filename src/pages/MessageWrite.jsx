import PrimaryButton from "../components/Buttons/PrimaryButton";
import HeaderLogoOnly from "../components/Header/HeaderLogoOnly";
import { Dropdown, InputField } from "../components/TextField/TextField";
import { Profile } from "../components/Profile/Profile";
import TextEditor from "../components/TextField/TextEditor";
import * as P from "./Create.style";
import { useState } from "react";

function MessageWrite() {
  const [content, setContent] = useState("");

  return (
    <P.Wrapper>
      <HeaderLogoOnly />
      <P.Wrapper className="section-wrap">
        <P.Section className="name">
          <P.SectionTitle>From.</P.SectionTitle>
          <InputField placeholder="이름을 입력해 주세요" />
        </P.Section>
        <P.Section className="profile">
          <P.SectionTitle>프로필 이미지</P.SectionTitle>
          <P.Wrapper className="profile-wrap">
            <Profile />
            <P.Wrapper className="profile-select-wrap">
              <p>프로필 이미지를 선택해주세요!</p>
              <P.Wrapper className="profile-list-wrap">
                <P.ProfileList />
                <P.ProfileList />
                <P.ProfileList />
                <P.ProfileList />
                <P.ProfileList />
                <P.ProfileList />
                <P.ProfileList />
                <P.ProfileList />
                <P.ProfileList />
                <P.ProfileList />
              </P.Wrapper>
            </P.Wrapper>
          </P.Wrapper>
        </P.Section>
        <P.Section className="section">
          <P.SectionTitle>상대와의 관계</P.SectionTitle>
          <Dropdown width="320px" />
        </P.Section>
        <P.Section className="">
          <P.SectionTitle>내용을 입력해 주세요</P.SectionTitle>
          <TextEditor content={content} setContent={setContent} />
        </P.Section>
        <P.Section className="select-font">
          <P.SectionTitle>폰트 선택</P.SectionTitle>
          <Dropdown width="320px" />
        </P.Section>
        <PrimaryButton width="100%">생성하기</PrimaryButton>
      </P.Wrapper>
    </P.Wrapper>
  );
}

export default MessageWrite;
