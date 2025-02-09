import { useEffect, useState } from "react";
import * as C from "./Colorchip.style";
import { CompletedIcon } from "../Icons";
import { useTheme } from "styled-components";
import background1 from "../../assets/images/background1.jpg";
import background2 from "../../assets/images/background2.jpg";
import background3 from "../../assets/images/background3.jpg";
import background4 from "../../assets/images/background4.jpg";

function Colorchip({ isImage }) {
  const colors = ["beige", "purple", "blue", "green"];
  const images = [background1, background2, background3, background4];

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
    } else {
      setSelectedColor(item);
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
