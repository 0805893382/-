import { GoogleGenAI } from "@google/genai";

// process 객체가 존재하지 않는 브라우저 환경에서의 에러 방지
const getApiKey = () => {
  try {
    return typeof process !== 'undefined' ? process.env.API_KEY : '';
  } catch (e) {
    return '';
  }
};

const apiKey = getApiKey();
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const getLogisticsCounselor = async (question: string): Promise<string> => {
  if (!ai) {
    return "API 키 설정이 필요합니다. 고객센터(080-589-3382)로 문의주세요.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: "당신은 '유통퀵화물'의 전문 상담원입니다. 물류, 배차, 상하차 방법, 화물 보험 등에 대해 친절하고 전문적으로 답변하세요. 답변은 한국어로 하며, 신뢰감을 주는 비즈니스 말투를 사용하세요."
      }
    });
    return response.text || "죄송합니다. 답변을 생성하는 중 오류가 발생했습니다.";
  } catch (error) {
    console.error("Gemini Counseling Error:", error);
    return "현재 상담이 지연되고 있습니다. 고객센터(080-589-3382)로 문의주시면 감사하겠습니다.";
  }
};