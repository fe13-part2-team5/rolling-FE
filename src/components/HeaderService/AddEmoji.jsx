import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import { AddIcon } from "../Icons";
import * as A from "./AddEmoji.style";

function AddEmoji() {
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);

  const toggleEmojiMenu = () => {
    setIsEmojiOpen((prev) => !prev);
  };

  return (
    <>
      <A.Button onClick={toggleEmojiMenu}>
        <A.Section>
          <AddIcon />
          <A.Text>추가</A.Text>
        </A.Section>
      </A.Button>

      {isEmojiOpen && (
        <>
          <A.Overlay onClick={toggleEmojiMenu} />
          <A.EmojiPickerWrapper>
            <EmojiPicker onEmojiClick={setIsEmojiOpen} />
          </A.EmojiPickerWrapper>
        </>
      )}
    </>
  );
}

export default AddEmoji;
