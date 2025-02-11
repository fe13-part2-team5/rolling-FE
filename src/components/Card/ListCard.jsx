import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as LC from "./ListCardStyle.js";
import { EmojiBadge } from "../Badge/Badge";

const getLuminance = (r, g, b) => 0.299 * r + 0.587 * g + 0.114 * b;

const getImageLuminance = (url, callback) => {
  const img = new Image();
  img.crossOrigin = "Anonymous";
  img.src = url;

  img.onload = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let total = 0;

    for (let i = 0; i < data.length; i += 4) {
      total += getLuminance(data[i], data[i + 1], data[i + 2]);
    }

    callback(total / (data.length / 4));
  };
};

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
  topReactions,
}) {
  const Navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);
  const handleCardClick = () => {
    Navigate(`/post/${id}`);
  };

  useEffect(() => {
    if (backgroundImageURL) {
      getImageLuminance(backgroundImageURL, (lum) => setIsDark(lum < 140));
    }
  }, [backgroundImageURL]);

  return (
    <LC.CardContainer
      $backgroundColor={backgroundColor}
      $backgroundImageURL={backgroundImageURL}
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <LC.CardContent>
        <LC.CardTitle $isDark={isDark}>To. {name}</LC.CardTitle>
        <ProfileList
          recentMessages={recentMessages}
          messageCount={messageCount}
        />
        <LC.CardCountText $isDark={isDark}>
          <LC.CountBoldText>{messageCount}</LC.CountBoldText>명이 작성했어요!
        </LC.CardCountText>

        <LC.ReactionContainer>
          <LC.ReactionIcons>
            {topReactions.map((reactions) => (
              <EmojiBadge
                key={reactions.id}
                emoji={reactions.emoji}
                count={reactions.count}
              />
            ))}
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
          topReactions={card.topReactions}
        />
      ))}
    </LC.CardListContainer>
  );
}

export default ListCard;
