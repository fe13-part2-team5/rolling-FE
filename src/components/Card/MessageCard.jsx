import {
  MessageCardContainer,
  SenderContainer,
  MessageProfileIcon,
  SenderFont,
  SenderBoldText,
  RelationshipBadge,
  MessageContainer,
  MessageFont,
  MessageDateFont,
  DeleteContainer,
} from "./MessageCardStyle";
import DeleteButton from "../Buttons/DeleteButton";
import { RelBadge } from "../Badge.jsx";

function MessageCard({
  recipientId,
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
  return (
    <MessageCardContainer onClick={onClick}>
      <SenderContainer>
        <MessageProfileIcon $profileImageURL={profileImageURL} />
        <div>
          <SenderFont>
            From. <SenderBoldText>{sender}</SenderBoldText>
          </SenderFont>
          <RelBadge>{relationship}</RelBadge>
        </div>
        <DeleteContainer>
          {showDeleteButton && (
            <DeleteButton $disable={false} onClick={() => onDelete(id)} />
          )}
        </DeleteContainer>
      </SenderContainer>
      <MessageContainer>
        <MessageFont>{content}</MessageFont>
      </MessageContainer>
      <MessageDateFont>{createdAt}</MessageDateFont>
    </MessageCardContainer>
  );
}

export default MessageCard;
