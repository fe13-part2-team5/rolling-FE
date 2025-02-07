import { useState } from "react";
import { ArrowDownIcon } from "../Icons";
import * as R from "./Reaction.style";

function Reaction({ topReactions }) {
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);

  const toggleEmojiMenu = () => {
    setIsEmojiOpen((prev) => !prev);
  };

  const renderReactions = (reactions) => {
    return reactions.map((reaction) => (
      <R.ReactionBox key={reaction.id}>
        {reaction.emoji} {reaction.count}
      </R.ReactionBox>
    ));
  };

  return (
    <>
      <R.ReactionBoxContainer>
        {renderReactions(topReactions.slice(0, 3))}
        <R.ArrowButton onClick={toggleEmojiMenu}>
          <ArrowDownIcon />
        </R.ArrowButton>
      </R.ReactionBoxContainer>

      {isEmojiOpen && (
        <>
          <R.Overlay onClick={toggleEmojiMenu} />
          <R.EmojiMoreWrapper>
            <R.EmojiList>{renderReactions(topReactions)}</R.EmojiList>
          </R.EmojiMoreWrapper>
        </>
      )}
    </>
  );
}

export default Reaction;
