import HeaderLogoOnly from "../components/Header/HeaderLogoOnly";
import Colorchip from "../components/Colorchip/Colorchip";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import ToggleButton from "../components/Buttons/ToggleButton";
import { InputField } from "../components/TextField/TextField";
import * as P from "./PostAndMessage.style";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PostCreate() {
  const [images, setImages] = useState([]);
  const [isToggled, setIsToggled] = useState(false);
  const [name, setName] = useState("");
  const [selectedColor, setSelectedColor] = useState("beige");
  const [selectedImageURL, setSelectedImageURL] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const preloadImages = (imageUrls) => {
      imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
      });
    };

    const getBackgroundImage = async () => {
      try {
        const response = await axios.get(
          "https://rolling-api.vercel.app/background-images/"
        );
        const imageUrls = response.data.imageUrls;
        setImages(imageUrls);
        preloadImages(imageUrls);

        if (!selectedImageURL) {
          setSelectedImageURL(imageUrls[0]);
        }
      } catch (error) {
        console.error("이미지 로드 실패:", error);
      }
    };

    getBackgroundImage();
  }, [selectedImageURL]);

  const isButtonDisabled = !name.trim();

  const handleSubmit = async () => {
    if (!isButtonDisabled) {
      const newPostData = {
        name: name,
        backgroundColor: selectedColor,
        backgroundImageURL: isToggled ? selectedImageURL : null,
      };

      try {
        const response = await axios.post(
          "https://rolling-api.vercel.app/13-5/recipients/",
          newPostData
        );
        const postId = response.data.id;
        navigate(`/post/${postId}`);
      } catch (error) {
        console.error("POST 요청 실패:", error);
      }
    }
  };

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };

  const handleBackgroundSelect = (selected) => {
    if (isToggled) {
      setSelectedImageURL(selected);
    } else {
      setSelectedColor(selected);
      setSelectedImageURL(null);
    }
  };

  return (
    <P.Wrapper>
      <HeaderLogoOnly />
      <P.Wrapper className="section-wrap">
        <P.Section className="name">
          <P.SectionTitle>To.</P.SectionTitle>
          <InputField
            placeholder="받는 사람 이름을 입력해 주세요"
            value={name}
            onChange={(value) => setName(value)}
          />
        </P.Section>
        <P.Section className="select-background">
          <P.Wrapper className="txt-box">
            <P.SectionTitle className="bg-select-title">
              배경화면을 선택해 주세요.
            </P.SectionTitle>
            <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
          </P.Wrapper>
          <P.StyledToggleButton>
            <ToggleButton
              width="122px"
              height="40px"
              handleToggle={handleToggle}
              $isToggled={isToggled}
            />
          </P.StyledToggleButton>
          <Colorchip
            isImage={isToggled}
            images={images}
            onSelect={handleBackgroundSelect}
          />
        </P.Section>
        <PrimaryButton
          width="100%"
          height="56px"
          $disable={isButtonDisabled}
          onClick={handleSubmit}
        >
          생성하기
        </PrimaryButton>
      </P.Wrapper>
    </P.Wrapper>
  );
}

export default PostCreate;
