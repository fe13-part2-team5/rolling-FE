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

export const MessageFont = styled.p`
  ${(props) => props.theme.fonts["18r"]}
  color: #4A4A4A;
  letter-spacing: -1%;
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
