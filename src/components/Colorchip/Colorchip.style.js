import styled from "styled-components";

export const ColorchipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const ColorChipItem = styled.div`
  position: relative;
  width: 168px;
  height: 168px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  background-color: ${({ theme, item, isImage }) =>
    isImage ? "transparent" : theme.colors[item][200]};
  background-image: ${({ item, isImage }) =>
    isImage ? `url(${item})` : "none"};
  background-size: cover;
  background-position: center;
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
  display: ${({ $isChecked }) => ($isChecked ? "block" : "none")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 44px;
  height: 44px;
  border-radius: 44px;
  background-color: ${({ theme }) => theme.colors.white};
`;
