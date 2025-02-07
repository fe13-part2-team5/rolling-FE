import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 275px;
  height: 260px;
  background: ${(props) =>
    props.$backgroundImageURL
      ? `url(${props.$backgroundImageURL}) no-repeat center/cover`
      : props.$backgroundColor === "purple"
      ? `#ecd9ff url("/assets/card-list/pattern_purple.png") no-repeat right bottom/auto`
      : props.$backgroundColor === "blue"
      ? `#b1e4ff url("/assets/card-list/pattern_blue.png") no-repeat right bottom/auto`
      : props.$backgroundColor === "beige"
      ? `#ffe2ad url("/assets/card-list/pattern_beige.png") no-repeat right bottom/auto`
      : props.$backgroundColor === "green"
      ? `#d0f5c3 url("/assets/card-list/pattern_green.png") no-repeat right bottom/auto`
      : "#ffffff"};
  background-size: auto;
  background-repeat: no-repeat;
  background-position: right bottom;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.14);
`;

export const CardContent = styled.div`
  width: 227px;
  height: 210px;
  margin: 30px 24px auto;
  gap: 43px;
`;

export const CardTitle = styled.h3`
  margin-bottom: 15px;
  ${(props) => props.theme.fonts["24b"]}
  color: ${(props) =>
    props.$backgroundImageURL && props.$backgroundImageURL !== ""
      ? "#ffffff"
      : "#181818"};
  letter-spacing: -1%;
`;

export const ProfileContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: 28px;
  margin-bottom: 15px;
`;

export const ProfileIcon = styled.div`
  position: absolute;
  left: ${(props) => props.$index * 20}px;
  z-index: ${(props) => 10 - props.$index};
  width: 28px;
  height: 28px;
  background-image: url(${(props) => props.$profileImageURL});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  border: 1.5px solid white;
`;

export const MoreMessagesCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  left: ${(props) => props.$index * 20}px;
  z-index: ${(props) => 10 - props.$index};
  width: 33px;
  height: 28px;
  padding: 5px 6px;
  background-color: #ffffff;
  border-radius: 30px;
`;

export const MoreMessageText = styled.p`
  ${(props) => props.theme.fonts["12r"]};
  color: #555555;
  letter-spacing: -0.5%;
`;

export const CardCountText = styled.p`
  ${(props) => props.theme.fonts["16r"]}
  color: ${(props) =>
    props.backgroundImageURL && props.backgroundImageURL !== ""
      ? "#ffffff"
      : "#3A3A3A"};
  letter-spacing: -1%;
`;
export const CountBoldText = styled.span`
  ${(props) => props.theme.fonts["16b"]}
`;

export const ReactionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 53px;
  margin-top: 40px;
  gap: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
`;

export const ReactionIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 199px;
  padding-top: 17px;
  gap: 8px;
`;

export const CardListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 166px 380px auto;
  gap: 20px;
`;
