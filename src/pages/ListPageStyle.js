import styled from "styled-components";

const ListTitleText = styled.h3`
  ${(props) => props.theme.fonts["24b"]}
  margin-left:380px;
  color: #000000;
  letter-spacing: -1%;
`;

const PostButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { ListTitleText, PostButtonWrapper };
