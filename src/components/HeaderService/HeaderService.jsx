import To from "./To";
import Reaction from "./Reaction";
import ShareButton from "./ShareButton";
import ProfileImages from "./ProfileImages";
import AddEmoji from "./AddEmoji";
import * as H from "./HeaderService.style";

function HeaderService({ recipient, reaction, updateReactions = () => {} }) {
  if (!recipient) return null;

  return (
    <H.HeaderBox>
      <H.HeaderContainer>
        <To name={recipient.name} />
        <H.RightSection>
          <ProfileImages
            recentMessages={recipient.recentMessages}
            messageCount={recipient.messageCount}
          />
          <H.Line />

          <H.Section>
            <Reaction reactions={reaction} />
            <H.MiniSection>
              <AddEmoji updateReactions={updateReactions} />
              <H.Line />
              <ShareButton />
            </H.MiniSection>
          </H.Section>
        </H.RightSection>
      </H.HeaderContainer>
    </H.HeaderBox>
  );
}

export default HeaderService;
