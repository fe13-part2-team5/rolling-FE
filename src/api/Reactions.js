import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

export const getReactions = async (recipientId) => {
  try {
    const response = await axios.get(
      `${baseURL}/recipients/${recipientId}/reactions/`
    );
    if (response.status === 200) {
      return { success: true, data: response.data };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("리액션 불러오기 중 에러 발생:", error);
    return { success: false };
  }
};
