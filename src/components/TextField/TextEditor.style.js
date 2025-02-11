import styled from "styled-components";
import ReactQuill from "react-quill";

// User Cumstom Fonts
const fontMap = {
  "Noto Sans": "'Noto Sans', sans-serif",
  Pretendard: "'Pretendard', sans-serif",
  나눔명조: "'Nanum Myeongjo', serif",
  "나눔손글씨 손편지체": "'NanumSonPyeonJiCe', sans-serif",
};

const StyledQuill = styled(ReactQuill)`
  .ql-toolbar {
    width: 100%;
    height: 40px;
    border-radius: 8px 8px 0 0;
    border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  }

  .ql-container {
    width: 100%;
    height: 220px;
    border-radius: 0 0 8px 8px;
    border: 1px solid ${({ theme }) => theme.colors.gray[300]};
    font-family: ${({ font }) => font};
  }

  * {
    font-family: ${({ $font }) => fontMap[$font] || "Noto Sans"};
  }
`;

export default StyledQuill;
