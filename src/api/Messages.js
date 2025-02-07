import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

/**
 * 특정 수신자의 메시지 목록을 가져오는 함수
 * @async
 * @param {number|string} recipientId - 메시지를 가져올 대상 수신자의 ID
 * @param {Object} [params={}] - API 요청에 전달할 쿼리 파라미터 (예: limit, offset)
 * @param {number} [params.limit] - 가져올 메시지 개수 (기본값 없음)
 * @param {number} [params.offset] - 시작 위치 (페이징 처리에 사용)
 * @returns {Promise<Object|Array>}
 * - 요청 성공 시: `{ success: true, data: 응답 데이터 }` 반환
 * - 요청 실패 시: `{ success: false }` 반환
 */
export const getMessages = async (recipientId, params = {}) => {
  try {
    const response = await axios.get(
      `${baseURL}/recipients/${recipientId}/messages/`,
      { params: params }
    );
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
