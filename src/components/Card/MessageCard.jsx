import parse from "html-react-parser";
import {
  MessageCardContainer,
  SenderContainer,
  MessageProfileIcon,
  SenderFont,
  SenderBoldText,
  MessageContainer,
  MessageFont,
  MessageDateFont,
  DeleteContainer,
} from "./MessageCardStyle";
import DeleteButton from "../Buttons/DeleteButton";
import { RelBadge } from "../Badge/Badge";
import { formatDate } from "../../utils/dateUtils";

const rel = {
  지인: "known",
  동료: "colleague",
  가족: "family",
  친구: "friend",
};

function MessageCard({
  recipientId,
  id,
  profileImageURL,
  sender,
  relationship,
  content,
  font,
  createdAt,
  showDeleteButton = false,
  onDelete,
  onClick,
}) {
  console.log(relationship);
  return (
    <MessageCardContainer onClick={onClick}>
      <SenderContainer>
        <MessageProfileIcon $profileImageURL={profileImageURL} />
        <div>
          <SenderFont isDeleteButtonVisible={showDeleteButton}>
            From. <SenderBoldText>{sender}</SenderBoldText>
          </SenderFont>
          <RelBadge value={rel[relationship]} />
        </div>
        <DeleteContainer>
          {showDeleteButton && (
            <DeleteButton $disable={false} onClick={() => onDelete(id)} />
          )}
        </DeleteContainer>
      </SenderContainer>
      <MessageContainer>
        <MessageFont $font={font}>{parse(content)}</MessageFont>
      </MessageContainer>
      <MessageDateFont>{formatDate(createdAt)}</MessageDateFont>
    </MessageCardContainer>
  );
}

export default MessageCard;
