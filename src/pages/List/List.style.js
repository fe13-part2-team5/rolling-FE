import styled from "styled-components";

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 24px;
  margin: 50px auto;
  position: relative;
`;

const CardSlider = styled.div`
  width: 1160px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 0;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

const CardContainer = styled.div`
  width: 1160px;
  display: flex;
  gap: 20px;
  transition: transform 0.3s ease-in-out;
  position: relative;
`;

const ListTitleText = styled.h3`
  ${(props) => props.theme.fonts["24b"]};
  margin-bottom: 15px;
  color: #000000;
  letter-spacing: -1%;
  align-self: flex-start;
  margin-left: calc((100% - 1205px) / 2);
  padding-left: 24px;

   @media (max-width: 1200px) {
    margin-left: 0;           
    padding-left: 25px;
`;

const PostButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 0 80px;
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
  ListWrapper,
};
