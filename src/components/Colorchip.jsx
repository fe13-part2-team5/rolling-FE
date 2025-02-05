import { useState } from "react";
import styled from "styled-components";

const ColorchipContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const ColorChipItem = styled.div`
  position: relative;
  width: 168px;
  height: 168px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  background-color: ${({ theme, color }) => theme.colors[color][200]};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 1;
  }
`;

// 아이콘 컴포넌트로 대체 예정
const Selection = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  display: ${({ isChecked }) => (isChecked ? "block" : "none")};
`;

function Colorchip() {
  const colors = ["beige", "purple", "blue", "green"];
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <ColorchipContainer>
      {colors.map((color, index) => (
        <ColorChipItem
          key={index}
          color={color}
          onClick={() => handleColorSelect(color)}
        >
          {/* Selection: 아이콘 컴포넌트로 대체 예정 */}
          <Selection isChecked={color === selectedColor}>✓</Selection>
        </ColorChipItem>
      ))}
    </ColorchipContainer>
  );
}

export default Colorchip;
