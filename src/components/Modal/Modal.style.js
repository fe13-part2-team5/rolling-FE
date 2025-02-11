import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000080;
  border-radius: 10px;
  z-index: 20;
`;

export const Container = styled.div`
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  height: 476px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 12px 0px #00000014;
  border-radius: 16px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 116px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 6px;
  max-width: 365px;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts["20r"]};
`;

export const Name = styled.span`
  ${({ theme }) => theme.fonts["20b"]};
`;

export const ProfileImage = styled.div`
  width: 56px;
  height: 56px;
  background-image: url(${({ $image }) => $image});
  background-size: cover;
  border-radius: 100px;
  outline: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

export const Date = styled.div`
  ${({ theme }) => theme.fonts["14r"]};
  color: ${({ theme }) => theme.colors.gray[400]};
`;

// User Cumstom Fonts
const fontMap = {
  "Noto Sans": "'Noto Sans', sans-serif",
  Pretendard: "'Pretendard', sans-serif",
  나눔명조: "'Nanum Myeongjo', serif",
  "나눔손글씨 손편지체": "'NanumSonPyeonJiCe', sans-serif",
};
export const Content = styled.div`
  width: 100%;
  height: 256px;
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.gray[500]};
  overflow-y: scroll;

  p {
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
