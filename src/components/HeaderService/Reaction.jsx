import { useState } from "react";
import { ArrowDownIcon } from "../Icons";
import * as G from "./GlobalStyle";
import { EmojiBadge } from "../Badge/Badge";

function Reaction({ reactions }) {
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);

  const toggleEmojiMenu = () => {
    setIsEmojiOpen((prev) => !prev);
  };

  const renderReactions = (reactions) => {
    return reactions.map((reaction) => (
      <EmojiBadge
        key={reaction.id}
        emoji={reaction.emoji}
        count={reaction.count}
      />
    ));
  };

  return (
    <>
      <G.ReactionBoxContainer>
        {renderReactions(reactions.slice(0, 3))}
        <G.ArrowButton onClick={toggleEmojiMenu}>
          <ArrowDownIcon />
        </G.ArrowButton>
      </G.ReactionBoxContainer>

      {isEmojiOpen && (
        <>
          <G.Overlay onClick={toggleEmojiMenu} />
          <G.EmojiMoreWrapper>
            <G.EmojiList>{renderReactions(reactions)}</G.EmojiList>
          </G.EmojiMoreWrapper>
        </>
      )}
    </>
  );
}

export default Reaction;
