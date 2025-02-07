import {
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
} from "../styles/CardListStyle";

function ProfileList({ recentMessages = [], messageCount = 0 }) {
  const maxVisibleProfiles = 3;
  const VisibleProfiles = recentMessages.slice(0, maxVisibleProfiles);
  const hiddenMessageCount = messageCount - recentMessages.length;

  return (
    <ProfileContainer>
      {VisibleProfiles.map((message, index) => (
        <ProfileIcon
          key={index}
          $profileImageURL={message.profileImageURL}
          $index={index}
        />
      ))}
      {hiddenMessageCount > 0 && (
        <MoreMessagesCount $index={maxVisibleProfiles}>
          <MoreMessageText>+{hiddenMessageCount}</MoreMessageText>
        </MoreMessagesCount>
      )}
    </ProfileContainer>
  );
}

function Card({
  backgroundColor,
  backgroundImageURL,
  name,
  profileImageURL,
  messageCount,
  recentMessages,
  reactionCount,
}) {
  return (
    <CardContainer
      $backgroundColor={backgroundColor}
      $backgroundImageURL={backgroundImageURL}
    >
      <CardContent>
        <CardTitle>To. {name}</CardTitle>
        <ProfileList
          recentMessages={recentMessages}
          messageCount={messageCount}
        />
        <CardCountText>
          <CountBoldText>{messageCount}</CountBoldText>명이 작성했어요!
        </CardCountText>
        <ReactionContainer>
          <ReactionIcons>
            {/*가장 많이 리액션된 아이콘 3개와 개수*/}
            <span>👍 20</span>
            <span>😆 12</span>
            <span>🥺 7</span>
          </ReactionIcons>
        </ReactionContainer>
      </CardContent>
    </CardContainer>
  );
}

function CardList({ cards }) {
  if (!cards || cards.length === 0) {
    return <p>등록된 카드가 없습니다. 새로운 롤링 페이퍼를 만들어 보세요!</p>;
  }

  return (
    <CardListContainer>
      {cards.map((card, id) => (
        <Card
          key={id}
          name={card.name}
          messageCount={card.messageCount}
          backgroundColor={card.backgroundColor}
          backgroundImageURL={card.backgroundImageURL}
        />
      ))}
    </CardListContainer>
  );
}

export default CardList;
