import PrimaryButton from "../../components/Buttons/PrimaryButton";
import HeaderLogoOnly from "../../components/Header/HeaderLogoOnly";
import { Dropdown, InputField } from "../../components/TextField/TextField";
import { Profile } from "../../components/Profile/Profile";
import TextEditor from "../../components/TextField/TextEditor";
import * as P from "./PostAndMessage.style";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function MessageWrite() {
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [profileImages, setProfileImages] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedRelationship, setSelectedRelationship] = useState("지인");
  const [selectedFont, setSelectedFont] = useState("Noto Sans");
  const navigate = useNavigate();
  const { id } = useParams();

  const optionDataRel = [
    { key: 1, value: "지인" },
    { key: 2, value: "동료" },
    { key: 3, value: "가족" },
    { key: 4, value: "친구" },
  ];

  const optionDataFonts = [
    { key: 1, value: "Noto Sans" },
    { key: 2, value: "Pretendard" },
    { key: 3, value: "나눔명조" },
    { key: 4, value: "나눔손글씨 손편지체" },
  ];

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

        if (!selectedProfile) {
          setSelectedProfile(imageUrls[0]);
        }
      } catch (error) {
        console.error("이미지 로드 실패:", error);
      }
    };

    getProfileImage();
  }, []);

  const isButtonDisabled = !(name.trim() && content.trim());

  const handleSubmit = async () => {
    if (!isButtonDisabled) {
      const newPostData = {
        sender: name,
        profileImageURL: selectedProfile,
        relationship: selectedRelationship,
        content: content,
        font: selectedFont,
      };
      try {
        await axios.post(
          `https://rolling-api.vercel.app/13-5/recipients/${id}/messages/`,
          newPostData
        );

        navigate(`/post/${id}`);
      } catch (error) {
        console.error("POST 요청 실패:", error);
      }
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
            <Profile image={selectedProfile} />
            <P.Wrapper className="profile-select-wrap">
              <p>프로필 이미지를 선택해주세요!</p>
              <P.Wrapper className="profile-list-wrap">
                {profileImages.map((image, index) => (
                  <P.ProfileList
                    key={index}
                    onClick={() => setSelectedProfile(image)}
                  >
                    <img src={image} alt={`profile-${index}`} />
                  </P.ProfileList>
                ))}
              </P.Wrapper>
            </P.Wrapper>
          </P.Wrapper>
        </P.Section>
        <P.Section className="section">
          <P.SectionTitle>상대와의 관계</P.SectionTitle>
          <Dropdown
            width="320px"
            optionData={optionDataRel}
            onSelect={setSelectedRelationship}
          />
        </P.Section>
        <P.Section>
          <P.SectionTitle>내용을 입력해 주세요</P.SectionTitle>
          <P.Wrapper className="text-editor-wrap">
            <TextEditor
              content={content}
              selectedFont={selectedFont}
              setContent={setContent}
            />
          </P.Wrapper>
        </P.Section>
        <P.Section className="select-font">
          <P.SectionTitle>폰트 선택</P.SectionTitle>
          <Dropdown
            width="320px"
            optionData={optionDataFonts}
            onSelect={setSelectedFont}
          />
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
