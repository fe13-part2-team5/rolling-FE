import * as G from "./GlobalStyle";

function ProfileImages({ recentMessages, messageCount }) {
  return (
    <G.ProfileImagesContainer>
      <G.ProfileImageBox>
        {recentMessages.slice(0, 3).map((message, index) => (
          <G.ProfileImage
            key={message.id}
            src={message.profileImageURL}
            alt={`profiles${index + 1}`}
          />
        ))}

        {messageCount >= 4 && <G.PlusNumber>+{messageCount - 3}</G.PlusNumber>}
      </G.ProfileImageBox>
      <G.Count>
        <G.Num>{messageCount}</G.Num>명이 작성했어요!
      </G.Count>
    </G.ProfileImagesContainer>
  );
}

export default ProfileImages;
