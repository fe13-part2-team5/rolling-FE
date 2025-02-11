import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 275px;
  height: 260px;
  background: ${(props) =>
    props.$backgroundImageURL
      ? `url(${props.$backgroundImageURL}) no-repeat center/cover`
      : props.$backgroundColor === "purple"
        ? `#ecd9ff url("/card-list/pattern_purple.png") no-repeat right bottom/auto`
        : props.$backgroundColor === "blue"
          ? `#b1e4ff url("/card-list/pattern_blue.png") no-repeat right bottom/auto`
          : props.$backgroundColor === "beige"
            ? `#ffe2ad url("/card-list/pattern_beige.png") no-repeat right bottom/auto`
            : props.$backgroundColor === "green"
              ? `#d0f5c3 url("/card-list/pattern_green.png") no-repeat right bottom/auto`
              : "#ffffff"};
  background-size: ${(props) => (props.$backgroundImageURL ? "cover" : "auto")};
  background-position: ${(props) =>
    props.$backgroundImageURL ? "center" : "right bottom"};
  background-repeat: no-repeat;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.14);
  transition: all 0.3s ease-out;
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.17);
  }
`;

const CardContent = styled.div`
  width: 227px;
  height: 210px;
  margin: 30px 24px auto;
  gap: 43px;
`;

const CardTitle = styled.h3`
  margin-bottom: 15px;
  ${(props) => props.theme.fonts["24b"]}
  color: ${(props) => (props.$isDark ? "#FFFFFF" : "#181818")};
  letter-spacing: -1%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  height: 28px;
  margin-bottom: 15px;
`;

const ProfileIcon = styled.div`
  margin-left: ${(props) => (props.$index === 0 ? "0px" : "-10px")};
  z-index: ${(props) => props.$index};
  width: 28px;
  height: 28px;
  background-image: url(${(props) => props.$profileImageURL});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  border: 1.5px solid white;
`;

const MoreMessagesCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -10px;
  z-index: 10;
  width: 33px;
  height: 28px;
  padding: 5px 6px;
  background-color: #ffffff;
  border: 1.5px solid #ffffff;
  border-radius: 30px;
`;

const MoreMessageText = styled.p`
  ${(props) => props.theme.fonts["12r"]};
  color: #555555;
  letter-spacing: -0.5%;
`;

const CardCountText = styled.p`
  ${(props) => props.theme.fonts["16r"]}
  color: ${(props) => (props.$isDark ? "#FFFFFF" : "#3A3A3A")};
  letter-spacing: -1%;
`;

const CountBoldText = styled.span`
  ${(props) => props.theme.fonts["16b"]}
`;

const ReactionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 53px;
  margin-top: 40px;
  gap: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
`;

const ReactionIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 199px;
  padding-top: 17px;
  gap: 8px;
`;

const CardListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  gap: 20px;
  transition: transform 0.3s ease-in-out;
  will-change: transform;

  @media (max-width: 1024px) {
    justify-content: flex-start;
    padding: 0 24px;
    gap: 16px;
  }

  @media (max-width: 767px) {
    justify-content: flex-start;
    padding: 0 16px;
    gap: 12px;
  }
`;

export {
  CardContainer,
  CardContent,
  CardTitle,
  ProfileContainer,
  ProfileIcon,
  MoreMessagesCount,
  MoreMessageText,
  CardCountText,
  CountBoldText,
  ReactionContainer,
  ReactionIcons,
  CardListContainer,
};
