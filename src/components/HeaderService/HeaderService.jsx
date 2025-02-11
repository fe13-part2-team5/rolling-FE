import To from "./To";
import Reaction from "./Reaction";
import ShareButton from "./ShareButton";
import ProfileImages from "./ProfileImages";
import AddEmoji from "./AddEmoji";
import * as H from "./HeaderService.style";

function HeaderService({ recipient, reaction, updateReactions = () => {} }) {
  if (!recipient) return null;

  return (
    /* PC & Tablet */
    <H.HeaderBox>
      <H.HeaderContainer>
        <To name={recipient.name} />
        <H.RightSection>
          <H.ProfileImagesWrapper>
            <ProfileImages
              recentMessages={recipient.recentMessages}
              messageCount={recipient.messageCount}
            />
          </H.ProfileImagesWrapper>

          <H.Line />
          <H.Section>
            <Reaction reactions={reaction} />
            <H.MiniSection>
              <AddEmoji updateReactions={updateReactions} />
              <H.Line />
              <ShareButton recipient={recipient} />
            </H.MiniSection>
          </H.Section>
        </H.RightSection>
      </H.HeaderContainer>

      {/* Mobile */}
      <H.MobileHeaderTop>
        <To name={recipient.name} />
      </H.MobileHeaderTop>

      <H.MobileHeaderBottom>
        <H.Section>
          <Reaction reactions={reaction} />
          <H.MiniSection>
            <AddEmoji updateReactions={updateReactions} />
            <H.Line />
            <ShareButton recipient={recipient} />
          </H.MiniSection>
        </H.Section>
      </H.MobileHeaderBottom>
    </H.HeaderBox>
  );
}

export default HeaderService;
