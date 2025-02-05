import styled from "styled-components";
import ReactQuill from "react-quill";

const StyledQuill = styled(ReactQuill)`
  .ql-toolbar {
    width: 720px;
    height: 40px;
    border-radius: 8px 8px 0 0;
    border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  }

  .ql-container {
    width: 720px;
    height: 220px;
    border-radius: 0 0 8px 8px;
    border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  }
`;

export default StyledQuill;
