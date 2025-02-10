import styled from "styled-components";

/* 공통 속성 */
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
`;

/* AddEmoji */
export const Button = styled.button`
  width: 88px;
  height: 36px;
  padding: 6px 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.white};

  cursor: pointer;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  width: 56px;
  height: 24px;
  white-space: nowrap;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray[900]};
  ${({ theme }) => ({ ...theme.fonts["16r"] })};
  font-weight: 500;

  white-space: nowrap;
`;

export const EmojiPickerWrapper = styled.div`
  position: absolute;
  top: 130%;
  right: 100px;
  z-index: 999;

  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.white};
`;

/* ProfileImages */
export const ProfileImagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 11px;
`;

export const ProfileImageBox = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 28px;
  height: 28px;

  margin-right: -12px;
  &:only-child {
    margin-right: 0;
  }

  border-radius: 50%;
  border: 1.4px solid ${({ theme }) => theme.colors.white};
`;

export const PlusNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 28px;
  height: 28px;
  margin-right: -12px;

  color: ${({ theme }) => theme.colors.gray[900]};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.gray[300]};

  ${({ theme }) => ({ ...theme.fonts["12r"] })};
`;

export const Count = styled.div`
  display: flex;
  white-space: nowrap;

  margin-left: 23px;

  ${({ theme }) => ({ ...theme.fonts["18r"] })};
  color: ${({ theme }) => theme.colors.gray[900]};
`;

export const Num = styled.p`
  ${({ theme }) => ({ ...theme.fonts["18b"] })};
`;

/* Reaction */
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

/* ShareButton */

export const ShareButton = styled.button`
  width: 56px;
  height: 36px;
  margin-right: 24px;
  padding: 6px 16px;

  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.white};

  cursor: pointer;
`;

export const ShareMenuWrapper = styled.div`
  position: absolute;
  top: 120%;
  left: 40px;
  z-index: 1000;

  width: 140px;
  height: 120px;
  padding: 10px 1px;

  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
`;

export const ShareOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    width: 138px;
    height: 50px;

    border: none;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.white};

    ${({ theme }) => ({ ...theme.fonts["16r"] })};

    cursor: pointer;
  }

  button:hover {
    background: ${({ theme }) => theme.colors.gray[200]};
  }
`;

/* To */
export const ToName = styled.span`
  margin-left: 16px;

  color: ${({ theme }) => theme.colors.gray[800]};
  ${({ theme }) => ({ ...theme.fonts["28b"] })};

  white-space: nowrap;
`;
