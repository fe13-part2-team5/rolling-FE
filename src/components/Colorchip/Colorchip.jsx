import { useEffect, useState } from "react";
import * as C from "./Colorchip.style";
import { CompletedIcon } from "../Icons";
import { useTheme } from "styled-components";
import axios from "axios";

function Colorchip({ isImage, onSelect }) {
  const colors = ["beige", "purple", "blue", "green"];
  const [images, setImages] = useState([]);
  const [backgroundList, setBackgroundList] = useState(colors);
  const [selectedBackground, setSelectedBackground] = useState(colors[0]);
  const theme = useTheme();

  useEffect(() => {
    const preloadImages = (imageUrls) => {
      imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
      });
    };

    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://rolling-api.vercel.app/background-images/"
        );
        const imageUrls = response.data.imageUrls;

        setImages(response.data.imageUrls);
        preloadImages(imageUrls);
      } catch (error) {
        console.error("이미지 로드 실패:", error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (isImage) {
      setBackgroundList(images);
      setSelectedBackground(images[0]);
      onSelect(images[0]);
    } else {
      setBackgroundList(colors);
      setSelectedBackground(colors[0]);
      onSelect(colors[0]);
    }
  }, [isImage, images]);

  const handleBackgroundSelect = (item) => {
    setSelectedBackground(item);
    onSelect(item);
  };

  return (
    <C.ColorchipContainer>
      {backgroundList.map((item, index) => (
        <C.ColorChipItem
          key={index}
          item={item}
          isImage={isImage}
          onClick={() => handleBackgroundSelect(item)}
        >
          <C.Selection $isChecked={item === selectedBackground}>
            <CompletedIcon size={44} color={theme.colors.gray[500]} />
          </C.Selection>
        </C.ColorChipItem>
      ))}
    </C.ColorchipContainer>
  );
}

export default Colorchip;
