import Header from "../components/Header/Header";
import HeaderService from "../components/HeaderService/HeaderService";
import CardList from "../components/CardList";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

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
];

function Edit() {
  const baseURL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const { id } = useParams();

  const deleteRecipient = async (recipientId) => {
    try {
      const response = await axios.delete(
        `${baseURL}/recipients/${recipientId}`
      );
      if (response.status === 200 || response.status === 204) {
        return { success: true };
      } else {
        return { success: false };
      }
    } catch (error) {
      console.error("롤링 페이퍼 대상 삭제 중 에러 발생:", error);
      return { success: false };
    }
  };

  const handleClick = async () => {
    const response = await deleteRecipient(id);
    if (response.success) {
      navigate("/list");
    }
  };

  return (
    <>
      <Header />
      <HeaderService />
      <div>
        <button onClick={handleClick}>삭제하기</button>
        <CardList cards={mockData} />
      </div>
    </>
  );
}

export default Edit;
