import To from "./To";
import Reaction from "./Reaction";
import ShareButton from "./ShareButton";
import ProfileImages from "./ProfileImages";
import AddEmoji from "./AddEmoji";
import * as H from "./HeaderService.style";
import { useState } from "react";
import { mockRecipient } from "./MockData";

function HeaderService() {
  const [recipient, setRecipient] = useState(mockRecipient);

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
            <Reaction topReactions={recipient.topReactions} />
            <H.MiniSection>
              <AddEmoji />
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
