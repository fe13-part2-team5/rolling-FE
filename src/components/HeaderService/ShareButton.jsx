import { useState } from "react";
import { ShareIcon } from "../Icons";
import * as S from "./ShareButton.style";
import { useContext } from "react";
import { ToastContext } from "../../context/ToastContext";

function ShareButton() {
  const { addToast } = useContext(ToastContext);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
    }
  }, []);

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
