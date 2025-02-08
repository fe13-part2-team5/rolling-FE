import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header/Header";
import ListCard from "../components/Card/ListCard";
import * as L from "./ListPageStyle";
import PrimaryButton from "../components/Buttons/PrimaryButton";

const dummyCard = [
  {
    id: 1,
    name: "Sowon",
    backgroundColor: "purple",
    backgroundImageURL: null,
    createdAt: "2025-01-20T06:26:54.582326",
    messageCount: 30,
    reactionCount: 39,
    topReactions: [
      { emoji: "👍", count: 20 },
      { emoji: "🔥", count: 12 },
      { emoji: "🥰", count: 7 },
    ],
  },

  {
    id: 2,
    name: "Jisoo",
    backgroundColor: "blue",
    backgroundImageURL: null,
    createdAt: "2025-01-18T06:26:54.582349",
    messageCount: 30,
    reactionCount: 25,
    topReactions: [
      { emoji: "👍", count: 10 },
      { emoji: "🔥", count: 10 },
      { emoji: "🥰", count: 5 },
    ],
  },

  {
    id: 3,
    name: "Dawon",
    backgroundColor: "beige",
    backgroundImageURL: null,
    createdAt: "2025-01-27T06:26:54.582354",
    messageCount: 30,
    reactionCount: 35,
    topReactions: [
      { emoji: "👍", count: 16 },
      { emoji: "🔥", count: 12 },
      { emoji: "🥰", count: 7 },
    ],
  },

  {
    id: 4,
    name: "Jihoon",
    backgroundColor: "green",
    backgroundImageURL: null,
    createdAt: "2025-01-22T06:26:54.582357",
    messageCount: 30,
    reactionCount: 30,
    topReactions: [
      { emoji: "👍", count: 15 },
      { emoji: "🔥", count: 10 },
      { emoji: "🥰", count: 5 },
    ],
  },

  {
    id: 5,
    name: "Kim",
    backgroundColor: "purple",
    backgroundImageURL: null,
    createdAt: "2025-01-22T06:26:54.582370",
    messageCount: 30,
    reactionCount: 20,
    topReactions: [
      { emoji: "👍", count: 10 },
      { emoji: "🔥", count: 5 },
      { emoji: "🥰", count: 5 },
    ],
  },

  {
    id: 6,
    name: "Somi",
    backgroundColor: "blue",
    backgroundImageURL: null,
    createdAt: "2025-02-07T06:26:54.582360",
    messageCount: 30,
    reactionCount: 32,
    topReactions: [
      { emoji: "👍", count: 13 },
      { emoji: "🔥", count: 12 },
      { emoji: "🥰", count: 7 },
    ],
  },

  {
    id: 7,
    name: "Jiwon",
    backgroundColor: "beige",
    backgroundImageURL: null,
    createdAt: "2025-01-08T06:26:54.582363",
    messageCount: 30,
    reactionCount: 25,
    topReactions: [
      { emoji: "👍", count: 10 },
      { emoji: "🔥", count: 10 },
      { emoji: "🥰", count: 5 },
    ],
  },

  {
    id: 8,
    name: "Suji",
    backgroundColor: "green",
    backgroundImageURL: null,
    createdAt: "2025-01-11T06:26:54.582366",
    messageCount: 30,
    reactionCount: 17,
    topReactions: [
      { emoji: "👍", count: 5 },
      { emoji: "🔥", count: 5 },
      { emoji: "🥰", count: 7 },
    ],
  },
];

function getPopularCards(cards) {
  return [...cards]
    .sort((a, b) => b.reactionCount - a.reactionCount)
    .slice(0, 4);
}

function getRecentCards(cards) {
  return [...cards]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 4);
}

function handleCreatePost() {
  Navigate("/Post");
}

function List() {
  const [cards, setCards] = useState([dummyCard]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(
          "https://rolling-api.vercel.app/13-5/recipients/"
        );

        console.log("API 응답 데이터:", response.data);
        // API 응답 데이터가 비어있을 시 더미 데이터를 사용
        if (!response.data.results || response.data.results.length === 0) {
          setCards(dummyCard);
        } else {
          setCards(response.data.results);
        }
      } catch (error) {
        console.error("API 요청 실패:", error);
        setCards(dummyCard);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCards();
  }, []);

  const PopularCards = getPopularCards(cards);
  const RecentCards = getRecentCards(cards);

  if (isloading) return <p>Loading...</p>;

  return (
    <div>
      <Header />
      <L.ListTitleText>인기 롤링 페이퍼</L.ListTitleText>
      <ListCard cards={PopularCards} />
      <L.ListTitleText>최근에 만든 롤링 페이퍼</L.ListTitleText>
      <ListCard cards={RecentCards} />
      <L.PostButtonWrapper>
        <PrimaryButton onClick={handleCreatePost}>
          나도 만들어보기
        </PrimaryButton>
      </L.PostButtonWrapper>
    </div>
  );
}

export default List;
