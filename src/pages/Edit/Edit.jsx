import Header from "../../components/Header/Header";
import HeaderService from "../../components/HeaderService/HeaderService";
import MessageCard from "../../components/Card/MessageCard";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import * as E from "./Edit.style";
import { useNavigate, useParams } from "react-router-dom";
import { deleteRecipient } from "../../api/Recipients";
import { useState, useEffect } from "react";
import { getMessages, deleteMessage } from "../../api/Messages";

function Edit({
  backgroundColor = "beige",
  backgroundImageURL = "https://picsum.photos/id/683/3840/2160",
}) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [messages, setMessages] = useState([]);

  const handleDeleteRecipient = async () => {
    const response = await deleteRecipient(id);
    if (response.success) {
      navigate("/list");
    }
  };

  const handleDeleteMessage = async (messageId) => {
    const response = await deleteMessage(messageId);
    if (response.success) {
      setMessages((prevMessages) =>
        prevMessages.filter((message) => message.id !== messageId)
      );
    }
  };

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await getMessages(id);

      if (response.success) {
        const data = response.data;
        const newMessages = data.results;
        setMessages(newMessages);
      }
    };

    fetchMessages();
  }, []);

  return (
    <>
      <Header />
      <HeaderService />
      <E.Main
        $backgroundColor={backgroundColor}
        $backgroundImageURL={backgroundImageURL}
      >
        <E.ButtonWrapper>
          <PrimaryButton
            onClick={handleDeleteRecipient}
            width={"92px"}
            height={"40px"}
          >
            삭제하기
          </PrimaryButton>
        </E.ButtonWrapper>
        <E.CardList>
          {messages.map((message, index) => (
            <MessageCard
              key={index}
              showDeleteButton={true}
              {...message}
              onDelete={handleDeleteMessage}
            />
          ))}
        </E.CardList>
      </E.Main>
    </>
  );
}

export default Edit;
