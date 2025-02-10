import { useState } from "react";
import { ShareIcon } from "../Icons";
import * as G from "./GlobalStyle";
import { useContext } from "react";
import { ToastContext } from "../../context/ToastContext";

function ShareButton() {
  const { addToast } = useContext(ToastContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleShareMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      addToast("URL이 복사 되었습니다.");
      toggleShareMenu();
    } catch (err) {
      console.error("URL 복사 실패", err);
    }
  };

  return (
    <>
      <G.ShareButton onClick={toggleShareMenu}>
        <ShareIcon />
      </G.ShareButton>

      {isOpen && (
        <>
          <G.Overlay onClick={toggleShareMenu} />
          <G.ShareMenuWrapper>
            <G.ShareOptions>
              <button>카카오톡 공유</button>
              <button onClick={handleCopyUrl}>URL 공유</button>
            </G.ShareOptions>
          </G.ShareMenuWrapper>
        </>
      )}
    </>
  );
}

export default ShareButton;
