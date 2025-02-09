import Header from "../../components/Header/Header";
import HeaderService from "../../components/HeaderService/HeaderService";
import MessageCard from "../../components/Card/MessageCard";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import * as E from "./PostEdit.style";
import { getRecipient, deleteRecipient } from "../../api/Recipients";
import { getMessages, deleteMessage } from "../../api/Messages";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useRef, useCallback } from "react";

function PostEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const observerRef = useRef(null);
  const [backgroundColor, setBackgroundColor] = useState(null);
  const [backgroundImageURL, setBackgroundImageURL] = useState(null);
  const [messages, setMessages] = useState([]);
  const [next, setNext] = useState(null);
  const [loading, setLoading] = useState(false);

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
    const fetchBackgrounds = async () => {
      const response = await getRecipient(id);
      if (response.success) {
        const data = response.data;
        setBackgroundColor(data.backgroundColor);
        setBackgroundImageURL(data.backgroundImageURL);
      }
    };

    const fetchMessages = async () => {
      const response = await getMessages(id);

      if (response.success) {
        const data = response.data;
        const newMessages = data.results;
        const newNext = data.next;
        setMessages(newMessages);
        setNext(newNext);
      }
    };

    fetchBackgrounds();
    fetchMessages();
  }, [id]);

  const loadMore = useCallback(async () => {
    if (loading || !next) return;
    setLoading(true);

    const response = await getMessages(id, next);
    if (response.success) {
      const data = response.data;
      setMessages((prevMessages) => [...prevMessages, ...data.results]);
      setNext(data.next);
    }
    setLoading(false);
  }, [next, id]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [loadMore]);

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
      <E.InfiniteScrollTrigger ref={observerRef} />
    </>
  );
}

export default PostEdit;
