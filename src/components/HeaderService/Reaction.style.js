import styled from "styled-components";

export const ReactionBoxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ReactionBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 2px;

  height: 36px;
  padding: 5px 10px;

  color: ${({ theme }) => theme.colors.white};
  background-color: rgba(0, 0, 0, 0.54);
  border-radius: 20px;

  ${({ theme }) => ({ ...theme.fonts["16r"] })};
  line-height: ${({ theme }) => theme.fonts["14r"].lineHeight};

  white-space: nowrap;
`;

export const ArrowButton = styled.button`
  display: flex;
  position: relctive;
  align-items: center;
  justify-content: center;

  width: 36px;
  height: 36px;

  background-color: ${({ theme }) => theme.colors.white};
  border: 0;

  cursor: pointer;
  pointer-events: auto;
`;

export const EmojiMoreWrapper = styled.div`
  position: absolute;
  top: 100%;
  transform: translateX(-60px);
  z-index: 999;

  padding: 12px;

  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const EmojiList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
`;
