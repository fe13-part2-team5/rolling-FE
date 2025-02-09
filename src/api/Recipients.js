import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

export const getRecipient = async (recipientId) => {
  try {
    const response = await axios.get(`${baseURL}/recipients/${recipientId}/`);
    if (response.status === 200) {
      return { success: true, data: response.data };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("롤링 페이퍼 대상 불러오기 중 에러 발생:", error);
    return { success: false };
  }
};

export const deleteRecipient = async (recipientId) => {
  try {
    const response = await axios.delete(
      `${baseURL}/recipients/${recipientId}/`
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
