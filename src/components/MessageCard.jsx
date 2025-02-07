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
} from "../styles/MessageCardStyle";

function MessageCard({
  recipientId,
  profileImageURL,
  sender,
  relationship,
  content,
  font,
  createdAt,
}) {
  return (
    <MessageCardContainer>
      <SenderContainer>
        <MessageProfileIcon $profileImageURL={profileImageURL} />
        <div>
          <SenderFont>
            From. <SenderBoldText>{sender}</SenderBoldText>
          </SenderFont>
          <RelationshipBadge>{relationship}</RelationshipBadge>
        </div>
      </SenderContainer>
      <MessageContainer>
        <MessageFont>{content}</MessageFont>
      </MessageContainer>
      <MessageDateFont>{createdAt}</MessageDateFont>
    </MessageCardContainer>
  );
}

export default MessageCard;
