import { useNavigate } from "react-router-dom";
import * as LC from "./ListCardStyle.js";
import { EmojiBadge } from "../Badge/Badge.jsx";

function ProfileList({ recentMessages = [], messageCount = 0 }) {
  const maxVisibleProfiles = 3;
  const VisibleProfiles = recentMessages.slice(0, maxVisibleProfiles);
  const hiddenMessageCount = messageCount - recentMessages.length;

  return (
    <LC.ProfileContainer>
      {VisibleProfiles.map((message, index) => (
        <LC.ProfileIcon
          key={index}
          $profileImageURL={message.profileImageURL}
          $index={index}
        />
      ))}
      {hiddenMessageCount > 0 && (
        <LC.MoreMessagesCount $index={maxVisibleProfiles}>
          <LC.MoreMessageText>+{hiddenMessageCount}</LC.MoreMessageText>
        </LC.MoreMessagesCount>
      )}
    </LC.ProfileContainer>
  );
}

function Card({
  id,
  backgroundColor,
  backgroundImageURL,
  name,
  profileImageURL,
  messageCount,
  recentMessages,
  reactionCount,
}) {
  const Navigate = useNavigate();
  const handleCardClick = () => {
    Navigate(`/post/${id}`);
  };

  return (
    <LC.CardContainer
      $backgroundColor={backgroundColor}
      $backgroundImageURL={backgroundImageURL}
      onCick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <LC.CardContent>
        <LC.CardTitle>To. {name}</LC.CardTitle>
        <ProfileList
          recentMessages={recentMessages}
          messageCount={messageCount}
        />
        <LC.CardCountText>
          <LC.CountBoldText>{messageCount}</LC.CountBoldText>명이 작성했어요!
        </LC.CardCountText>
        <LC.ReactionContainer>
          <LC.ReactionIcons>
            <EmojiBadge />
          </LC.ReactionIcons>
        </LC.ReactionContainer>
      </LC.CardContent>
    </LC.CardContainer>
  );
}

function ListCard({ cards }) {
  if (!cards || cards.length === 0) {
    return <p>등록된 카드가 없습니다. 새로운 롤링 페이퍼를 만들어 보세요!</p>;
  }

  return (
    <LC.CardListContainer>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          name={card.name}
          profileImageURL={card.profileImageURL}
          messageCount={card.messageCount}
          reactionCount={card.reactionCount}
          backgroundColor={card.backgroundColor}
          backgroundImageURL={card.backgroundImageURL}
        />
      ))}
    </LC.CardListContainer>
  );
}

export default ListCard;
