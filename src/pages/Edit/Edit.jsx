import Header from "../../components/Header/Header";
import HeaderService from "../../components/HeaderService/HeaderService";
import MessageCard from "../../components/MessageCard";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import * as E from "./Edit.style";
import { useNavigate, useParams } from "react-router-dom";
import { deleteRecipient } from "../../api/Recipients";
import { useEffect, useState } from "react";
import { getMessages } from "../../api/Messages";

const mockData = [
  {
    id: 32,
    recipientId: 2,
    sender: "김하은",
    profileImageURL:
      "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
    relationship: "가족",
    content: "열심히 일하는 모습 멋있습니다.",
    font: "Pretendard",
    createdAt: "2023-11-01T08:05:25.399056Z",
  },
  {
    id: 31,
    recipientId: 2,
    sender: "이영준",
    profileImageURL:
      "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
    relationship: "지인",
    content: "항상 응원합니다",
    font: "Noto Sans",
    createdAt: "2023-11-01T08:04:12.852691Z",
  },
  {
    id: 31,
    recipientId: 2,
    sender: "이영준",
    profileImageURL:
      "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
    relationship: "지인",
    content: "항상 응원합니다",
    font: "Noto Sans",
    createdAt: "2023-11-01T08:04:12.852691Z",
  },
  {
    id: 31,
    recipientId: 2,
    sender: "이영준",
    profileImageURL:
      "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
    relationship: "지인",
    content: "항상 응원합니다",
    font: "Noto Sans",
    createdAt: "2023-11-01T08:04:12.852691Z",
  },
  {
    id: 31,
    recipientId: 2,
    sender: "이영준",
    profileImageURL:
      "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
    relationship: "지인",
    content: "항상 응원합니다",
    font: "Noto Sans",
    createdAt: "2023-11-01T08:04:12.852691Z",
  },
  {
    id: 31,
    recipientId: 2,
    sender: "이영준",
    profileImageURL:
      "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
    relationship: "지인",
    content: "항상 응원합니다",
    font: "Noto Sans",
    createdAt: "2023-11-01T08:04:12.852691Z",
  },
  {
    id: 31,
    recipientId: 2,
    sender: "이영준",
    profileImageURL:
      "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
    relationship: "지인",
    content: "항상 응원합니다",
    font: "Noto Sans",
    createdAt: "2023-11-01T08:04:12.852691Z",
  },
  {
    id: 31,
    recipientId: 2,
    sender: "이영준",
    profileImageURL:
      "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
    relationship: "지인",
    content: "항상 응원합니다",
    font: "Noto Sans",
    createdAt: "2023-11-01T08:04:12.852691Z",
  },
  {
    id: 31,
    recipientId: 2,
    sender: "이영준",
    profileImageURL:
      "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
    relationship: "지인",
    content: "항상 응원합니다",
    font: "Noto Sans",
    createdAt: "2023-11-01T08:04:12.852691Z",
  },
  {
    id: 31,
    recipientId: 2,
    sender: "이영준",
    profileImageURL:
      "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
    relationship: "지인",
    content: "항상 응원합니다",
    font: "Noto Sans",
    createdAt: "2023-11-01T08:04:12.852691Z",
  },
  {
    id: 31,
    recipientId: 2,
    sender: "이영준",
    profileImageURL:
      "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
    relationship: "지인",
    content: "항상 응원합니다",
    font: "Noto Sans",
    createdAt: "2023-11-01T08:04:12.852691Z",
  },
];

function Edit({
  backgroundColor = "beige",
  backgroundImageURL = "https://picsum.photos/id/683/3840/2160",
}) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [messages, setMessages] = useState([]);

  const handleClick = async () => {
    const response = await deleteRecipient(id);
    if (response.success) {
      navigate("/list");
    }
  };

  useEffect(() => {
    const fetchMessages = async () => {
      const result = await getMessages(id);
      if (result.success) {
        setMessages(result.data);
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
          <PrimaryButton onClick={handleClick} width={"92px"} height={"40px"}>
            삭제하기
          </PrimaryButton>
        </E.ButtonWrapper>
        <E.CardList>
          {messages.map((message, index) => (
            <MessageCard key={index} {...message} />
          ))}
        </E.CardList>
      </E.Main>
    </>
  );
}

export default Edit;
