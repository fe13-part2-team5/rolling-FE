import { useEffect, useState } from "react";
import * as C from "./Colorchip.style";
import { CompletedIcon } from "../Icons";
import { useTheme } from "styled-components";

function Colorchip({ isImage, images, onSelect }) {
  const colors = ["beige", "purple", "blue", "green"];

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [backgroundList, setBackgroundList] = useState(colors);

  const theme = useTheme();

  useEffect(() => {
    if (isImage) {
      setBackgroundList(images);
      setSelectedImage(images[0]);
    } else {
      setBackgroundList(colors);
      setSelectedColor(colors[0]);
    }
  }, [isImage]);

  const handleBackgroundSelect = (item, index) => {
    if (isImage) {
      setSelectedImage(images[index]);
      onSelect(images[index]); // 선택된 이미지 부모로 전달
    } else {
      setSelectedColor(item);
      onSelect(item); // 선택된 색상 부모로 전달
    }
  };

  return (
    <C.ColorchipContainer>
      {backgroundList.map((item, index) => (
        <C.ColorChipItem
          key={item}
          item={item}
          isImage={isImage}
          onClick={() => handleBackgroundSelect(item, index)}
        >
          <C.Selection
            $isChecked={
              isImage ? item === selectedImage : item === selectedColor
            }
          >
            <CompletedIcon size={44} color={theme.colors.gray[500]} />
          </C.Selection>
        </C.ColorChipItem>
      ))}
    </C.ColorchipContainer>
  );
}

export default Colorchip;
