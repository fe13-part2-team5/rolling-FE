import { useState } from "react";
import { ShareIcon } from "../Icons";
import * as S from "./ShareButton.style";

function ShareButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleShareMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      //Toast로 대체 예정
      alert("복사 성공");
      toggleShareMenu();
    } catch (err) {
      console.error("URL 복사 실패", err);
    }
  };

  return (
    <>
      <S.Button onClick={toggleShareMenu}>
        <ShareIcon />
      </S.Button>

      {isOpen && (
        <>
          <S.Overlay onClick={toggleShareMenu} />
          <S.ShareMenuWrapper>
            <S.ShareOptions>
              <button>카카오톡 공유</button>
              <button onClick={handleCopyUrl}>URL 공유</button>
            </S.ShareOptions>
          </S.ShareMenuWrapper>
        </>
      )}
    </>
  );
}

export default ShareButton;
