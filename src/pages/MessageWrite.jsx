import PrimaryButton from "../components/Buttons/PrimaryButton";
import HeaderLogoOnly from "../components/Header/HeaderLogoOnly";
import { Dropdown, InputField } from "../components/TextField/TextField";
import { Profile } from "../components/Profile/Profile";
import TextEditor from "../components/TextField/TextEditor";
import * as P from "./PostAndMessage.style";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function MessageWrite() {
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [profileImages, setProfileImages] = useState([]);
  const navigate = useNavigate();

  const optionDataRel = [
    { key: 1, value: "지인" },
    { key: 2, value: "동료" },
    { key: 3, value: "가족" },
    { key: 4, value: "친구" },
  ];

  const optionDataFonts = [
    { key: 1, value: "Noto Sans" },
    { key: 2, value: "Pretendard" },
    { key: 3, value: "Roboto" },
    { key: 4, value: "Lato" },
  ];

  // const profiles = Array(10).fill(null);

  useEffect(() => {
    const preloadImages = (imageUrls) => {
      imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
      });
    };

    const getProfileImage = async () => {
      try {
        const response = await axios.get(
          "https://rolling-api.vercel.app/profile-images/"
        );
        const imageUrls = response.data.imageUrls;
        setProfileImages(imageUrls);
        preloadImages(imageUrls);

        // if (!selectedImageURL) {
        //   setSelectedImageURL(imageUrls[0]);
        // }
      } catch (error) {
        console.error("이미지 로드 실패:", error);
      }
    };

    getProfileImage();
  }, []);

  const isButtonDisabled = !(name.trim() && content.trim());

  const handleSubmit = () => {
    if (!isButtonDisabled) {
      const id = Math.random().toString(36).substr(2, 9);
      navigate(`/post/${id}`);
    }
  };

  return (
    <P.Wrapper>
      <HeaderLogoOnly />
      <P.Wrapper className="section-wrap">
        <P.Section className="name">
          <P.SectionTitle>From.</P.SectionTitle>
          <InputField
            placeholder="이름을 입력해 주세요"
            value={name}
            onChange={(value) => setName(value)}
          />
        </P.Section>
        <P.Section className="profile">
          <P.SectionTitle>프로필 이미지</P.SectionTitle>
          <P.Wrapper className="profile-wrap">
            <Profile />
            <P.Wrapper className="profile-select-wrap">
              <p>프로필 이미지를 선택해주세요!</p>
              <P.Wrapper className="profile-list-wrap">
                {profileImages.map((image, index) => (
                  // <P.ProfileList key={index} item={image} />
                  <P.ProfileList key={index}>
                    <img src={image} alt={`profile-${index}`} />
                  </P.ProfileList>
                ))}
              </P.Wrapper>
            </P.Wrapper>
          </P.Wrapper>
        </P.Section>
        <P.Section className="section">
          <P.SectionTitle>상대와의 관계</P.SectionTitle>
          <Dropdown width="320px" optionData={optionDataRel} />
        </P.Section>
        <P.Section className="">
          <P.SectionTitle>내용을 입력해 주세요</P.SectionTitle>
          <TextEditor content={content} setContent={setContent} />
        </P.Section>
        <P.Section className="select-font">
          <P.SectionTitle>폰트 선택</P.SectionTitle>
          <Dropdown width="320px" optionData={optionDataFonts} />
        </P.Section>
        <PrimaryButton
          width="100%"
          $disable={isButtonDisabled}
          onClick={handleSubmit}
        >
          생성하기
        </PrimaryButton>
      </P.Wrapper>
    </P.Wrapper>
  );
}

export default MessageWrite;
