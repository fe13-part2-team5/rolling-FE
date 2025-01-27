import { Container, Content, Message, Completed, Button } from "./Toast.style";

function Toast({ onClose }) {
  return (
    <Container>
      <Content>
        <Completed />
        <Message>URL이 복사되었습니다.</Message>
      </Content>
      <Button onClick={onClose} />
    </Container>
  );
}

export default Toast;
