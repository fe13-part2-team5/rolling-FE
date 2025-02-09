import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

export const getMessages = async (
  recipientId,
  url = `${baseURL}/recipients/${recipientId}/messages/?limit=6&offset=0`
) => {
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      return { success: true, data: response.data };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("메시지 목록 불러오기 중 에러 발생:", error);
    return { success: false };
  }
};

export const deleteMessage = async (messageId) => {
  try {
    const response = await axios.delete(`${baseURL}/messages/${messageId}/`);
    if (response.status === 200 || response.status === 204) {
      return { success: true, data: response.data };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("메시지 삭제 중 에러 발생:", error);
    return { success: false };
  }
};
