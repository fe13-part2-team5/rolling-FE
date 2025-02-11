import { useEffect, useState } from "react";
import { ShareIcon } from "../Icons";
import * as G from "./GlobalStyle";
import { useContext } from "react";
import { ToastContext } from "../../context/ToastContext";

function ShareButton({ recipient }) {
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

  const handleKakaoShare = () => {
    if (!window.Kakao) {
      alert("카카오 SDK가 로드되지 않았습니다.");
      return;
    }

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: `${recipient.name}님의 롤링페이퍼 🎉`,
        description: `${recipient.messageCount}명이 작성했어요!`,
        imageUrl:
          recipient.backgroundImageURL ||
          "https://picsum.photos/id/683/3840/2160",
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: "구경하러 가기",
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    });

    toggleShareMenu();
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
              <button onClick={handleKakaoShare}>카카오톡 공유</button>
              <button onClick={handleCopyUrl}>URL 공유</button>
            </G.ShareOptions>
          </G.ShareMenuWrapper>
        </>
      )}
    </>
  );
}

export default ShareButton;