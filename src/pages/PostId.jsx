import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HeaderService from "../components/HeaderService/HeaderService";
import HeaderLogoOnly from "../components/Header/HeaderLogoOnly";
import MessageCard from "../components/Card/MessageCard";
import Modal from "../components/Modal/Modal";
import { messageData } from "./MessageData";
import { MessageCardBox, Box, PlusBox } from "./PostId.style";
import CreateButton from "../components/Buttons/CreateButton";

function PostId() {
  const { recipientId } = useParams();
  const [messages, setMessages] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [totalCount, setTotalCount] = useState(null);
  const PAGE_SIZE_INITIAL = 5;
  const PAGE_SIZE_MORE = 6;
  // const { id } = useParams();
  const id = "9817";

  useEffect(() => {
    const fetchRecipientData = async () => {
      try {
        const response = await axios.get(
          //git  ../13-5/recipients/${recipientId}/
          `https://rolling-api.vercel.app/1-7/recipients/${id}/`
        );
        if (response.data.backgroundColor) {
          setBackgroundColor(response.data.backgroundColor);
        }
      } catch (error) {
        console.error("배경색 조회 오류:", error);
      }
    };

    const fetchInitialMessages = async () => {
      try {
        const response = await axios.get(
          //git  ../13-5/recipients/${recipientId}/messages/
          `https://rolling-api.vercel.app/1-7/recipients/${id}/messages/`,
          { params: { limit: PAGE_SIZE_INITIAL, offset: 0 } }
        );

        setMessages(response.data.results);

        if (typeof response.data.count === "number") {
          setTotalCount(response.data.count);
        }
      } catch (error) {
        console.error("초기 메시지 조회 오류:", error);
        setMessages(messageData);
      }
    };

    const fetchData = async () => {
      await Promise.all([fetchRecipientData(), fetchInitialMessages()]);
      setIsReady(true);
    };

    fetchData();
  }, [recipientId]);

  const fetchMoreMessages = async () => {
    if (!hasMore || totalCount === null) {
      return;
    }

    const offset = messages.length;
    const remainingItems = Math.max(0, totalCount - offset);
    const fetchLimit = Math.max(0, Math.min(remainingItems, PAGE_SIZE_MORE));

    if (fetchLimit <= 0) {
      setHasMore(false);
      return;
    }

    try {
      const response = await axios.get(
        //git  ../13-5/recipients/${recipientId}/messages/
        `https://rolling-api.vercel.app/1-7/recipients/${id}/messages/`,
        { params: { limit: fetchLimit, offset } }
      );

      const newMessages = response.data.results;

      if (newMessages.length > 0) {
        setMessages((prevMessages) => {
          const uniqueMessages = [...prevMessages];
          newMessages.forEach((msg) => {
            if (!uniqueMessages.some((m) => m.id === msg.id)) {
              uniqueMessages.push(msg);
            }
          });

          return uniqueMessages;
        });
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("추가 메시지 조회 오류:", error);
      setHasMore(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!hasMore) return;

      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight =
        document.documentElement.clientHeight || window.innerHeight;

      if (scrollTop + clientHeight >= scrollHeight - 50) {
        fetchMoreMessages();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, totalCount, messages.length]);

  const handleOpenModal = (message) => {
    setSelectedMessage(message);
  };

  const handleCloseModal = () => {
    setSelectedMessage(null);
  };

  if (!isReady) return null;

  return (
    <Box bgColor={backgroundColor}>
      <HeaderLogoOnly />
      <HeaderService />
      <MessageCardBox messageCount={messages.length}>
        {/* <PlusBox to="/post/{id}/message" */}
        <PlusBox to="/">
          <CreateButton />
        </PlusBox>
        {messages.map((message, index) => (
          <MessageCard
            key={index}
            {...message}
            onClick={() => handleOpenModal(message)}
          />
        ))}
      </MessageCardBox>

      {selectedMessage && (
        <Modal message={selectedMessage} handleClose={handleCloseModal} />
      )}
    </Box>
  );
}

export default PostId;
