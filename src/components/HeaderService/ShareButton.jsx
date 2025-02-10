import { useEffect, useState } from "react";
import { ShareIcon } from "../Icons";
import * as G from "./GlobalStyle";
import { useContext } from "react";
import { ToastContext } from "../../context/ToastContext";

function ShareButton() {
  const { addToast } = useContext(ToastContext);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY); // 🔹 카카오 앱 키 입력
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
        title: "이 페이지를 공유합니다!",
        description: "카카오톡 공유 테스트",
        imageUrl: "",
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: "페이지 보기",
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    });

    toggleShareMenu(); // 공유 후 메뉴 닫기
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
