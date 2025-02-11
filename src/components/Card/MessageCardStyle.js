import styled from "styled-components";

export const MessageCardContainer = styled.div`
  position: relative;
  width: 384px;
  height: 280px;
  border-radius: 16px;
  background-color: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.14);
`;

export const SenderContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  padding: 28px 24px 16px 24px;
  gap: 12px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 48px);
    height: 1px;
    background-color: #eeeeee;
  }
`;

export const MessageProfileIcon = styled.div`
  background-image: url(${(props) => props.$profileImageURL});
  background-size: cover;
  background-position: center;
  width: 56px;
  height: 56px;
  border-radius: 100px;
  border: 1px solid; white;
  border-color: #EEEEEE;
`;

export const SenderFont = styled.h3`
  ${(props) => props.theme.fonts["20r"]}
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: ${(props) => (props.isDeleteButtonVisible ? "220px" : "268px")};
`;

export const SenderBoldText = styled.span`
  ${(props) => props.theme.fonts["20b"]}
`;

export const RelationshipBadge = styled.div`
  width: 41px;
  height: 20px;
  padding: 8px 0;
  gap: 10px;
  background-color: #f8f0ff;
  border-radius: 4px;
`;

export const MessageContainer = styled.div`
  display: block;
  align-items: center;
  overflow-y: auto;
  width: calc(100% - 24px);
  height: 106px;
  margin-top: 20px;
  padding-left: 24px;
`;

// User Cumstom Fonts
const fontMap = {
  "Noto Sans": "'Noto Sans', sans-serif",
  Pretendard: "'Pretendard', sans-serif",
  나눔명조: "'Nanum Myeongjo', serif",
  "나눔손글씨 손편지체": "'NanumSonPyeonJiCe', sans-serif",
};

export const MessageFont = styled.div`
  color: ${({ theme }) => theme.colors.gray[600]};
  letter-spacing: -1%;

  * {
    font-family: ${({ $font }) => fontMap[$font] || "Noto Sans, sans-serif"};
    ${({ theme }) => {
      const { fontFamily, ...rest } = theme.fonts["18r"];
      return { ...rest };
    }}
  }

  h1 {
    font-family: ${({ $font }) => fontMap[$font] || "Noto Sans, sans-serif"};
    ${({ theme }) => {
      const { fontFamily, ...rest } = theme.fonts["22b"];
      return { ...rest };
    }}
  }

  h2 {
    font-family: ${({ $font }) => fontMap[$font] || "Noto Sans, sans-serif"};
    ${({ theme }) => {
      const { fontFamily, ...rest } = theme.fonts["20b"];
      return { ...rest };
    }}
  }

  ol {
    list-style-type: decimal;
    padding-left: 36px;
  }

  ul {
    list-style-type: disc;
    padding-left: 36px;
  }

  .ql-align-center {
    text-align: center;
  }

  .ql-align-right {
    text-align: right;
  }

  .ql-align-justify {
    text-align: justify;
  }
`;

export const MessageDateFont = styled.p`
  ${(props) => props.theme.fonts["12r"]}
  position: absolute;
  bottom: 24px;
  left: 24px;
  color: #999999;
  letter-spacing: -0.5%;
`;

export const DeleteContainer = styled.div`
  position: absolute;
  right: 24px;
`;
