import styled from "styled-components";

const ListTitleText = styled.h3`
  ${(props) => props.theme.fonts["24b"]};
  margin: 50px 0 15px 380px;
  color: #000000;
  letter-spacing: -1%;
`;

const PostButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;

const CardSlider = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  gap: 10px;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  transition: transform 0.3s ease-in-out;
  position: relative;
`;

const ArrowButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  &.left {
    left: -20px;
  }

  &.right {
    right: -20px;
  }
`;

const Divider = styled.div`
  position: sticky;
  top: 65px;
  width: 100%;
  border-top: 1px solid #ededed;
`;

export {
  ListTitleText,
  PostButtonWrapper,
  ArrowButtonWrapper,
  CardSlider,
  CardContainer,
  Divider,
};
