import * as P from "./ProfileImages.style";

function ProfileImages({ recentMessages, messageCount }) {
  return (
    <P.ProfileImagesContainer>
      <P.ProfileImageBox>
        {recentMessages.slice(0, 3).map((message, index) => (
          <P.ProfileImage
            key={message.id}
            src={message.profileImageURL}
            alt={`profiles${index + 1}`}
          />
        ))}

        {messageCount >= 4 && <P.PlusNumber>+{messageCount - 3}</P.PlusNumber>}
      </P.ProfileImageBox>
      <P.Count>
        <P.Num>{messageCount}</P.Num>명이 작성했어요!
      </P.Count>
    </P.ProfileImagesContainer>
  );
}

export default ProfileImages;
