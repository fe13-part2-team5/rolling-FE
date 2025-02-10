import * as M from "./Modal.style";
import PrimaryButton from "../Buttons/PrimaryButton";
import parse from "html-react-parser";
import { formatDate } from "../../utils/dateUtils";
import { RelBadge } from "../Badge/Badge";

const rel = {
  지인: "known",
  동료: "colleague",
  가족: "family",
  친구: "friend",
};

function Modal({ message, handleClose }) {
  const {
    id,
    recipientId,
    sender,
    profileImageURL,
    relationship,
    content,
    font,
    createdAt,
  } = message;

  return (
    <M.Backdrop onClick={handleClose}>
      <M.Container>
        <M.Header>
          <M.ProfileWrapper>
            <M.ProfileImage $image={profileImageURL} />
            <M.TitleWrapper>
              <M.Title>
                From. <M.Name>{sender}</M.Name>
              </M.Title>
              <RelBadge value={rel[relationship]} />
            </M.TitleWrapper>
          </M.ProfileWrapper>
          <M.Date>{formatDate(createdAt)}</M.Date>
        </M.Header>
        <M.Content $font={font}>{parse(content)}</M.Content>
        <PrimaryButton width={"120px"} height={"40px"} onClick={handleClose}>
          확인
        </PrimaryButton>
      </M.Container>
    </M.Backdrop>
  );
}

export default Modal;
