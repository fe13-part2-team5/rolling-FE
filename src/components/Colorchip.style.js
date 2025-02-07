import styled from "styled-components";

export const ColorchipContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export const ColorChipItem = styled.div`
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
export const Selection = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  display: ${({ isChecked }) => (isChecked ? "block" : "none")};
`;
