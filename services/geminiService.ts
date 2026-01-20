
import { GoogleGenAI } from "@google/genai";

// 브라우저 환경에서 process.env 에러를 방지하는 안전한 키 획득 함수
const getSafeApiKey = (): string => {
  try {
    // 1. globalThis 확인 (최신 브라우저 표준)
    if (typeof (window as any).process !== 'undefined' && (window as any).process.env) {
      return (window as any).process.env.API_KEY || '';
    }
    // 2. 직접적인 process 참조 시도 (try-catch로 보호)
    return (process as any).env.API_KEY || '';
  } catch (e) {
    return '';
  }
};

const apiKey = getSafeApiKey();
// AI 객체 초기화 시 에러 방지
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const getLogisticsCounselor = async (question: string): Promise<string> => {
  if (!ai) {
    return "현재 시스템 준비 중입니다. 신속한 상담은 고객센터(080-589-3382)로 연락 부탁드립니다.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: "당신은 '유통퀵화물'의 전문 상담원입니다. 물류, 배차, 상하차 방법, 화물 보험 등에 대해 친절하고 전문적으로 답변하세요. 답변은 한국어로 하며, 신뢰감을 주는 비즈니스 말투를 사용하세요."
      }
    });
    return response.text || "잠시 후 다시 시도해 주세요.";
  } catch (error) {
    console.error("Gemini Counselor Error:", error);
    return "죄송합니다. 현재 상담량이 많아 연결이 지연되고 있습니다. 080-589-3382로 전화주시면 즉시 안내해 드리겠습니다.";
  }
};
