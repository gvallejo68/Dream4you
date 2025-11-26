import { GoogleGenAI, ChatSession, GenerativeModel } from "@google/genai";
import { PIZZA_SYSTEM_INSTRUCTION, REPORT_ASSISTANT_INSTRUCTION } from "../constants";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// -- Pizza Demo Service --
let pizzaChatSession: ChatSession | null = null;

export const initPizzaDemo = async (): Promise<string> => {
  const model = "gemini-2.5-flash"; 
  pizzaChatSession = ai.chats.create({
    model,
    config: {
      systemInstruction: PIZZA_SYSTEM_INSTRUCTION,
      temperature: 0.7,
      maxOutputTokens: 150, // Keep voice responses short
    },
  });
  
  // Initial greeting
  const response = await pizzaChatSession.sendMessage({
    message: "The user has connected to the call. Greet them by name (Alex) and mention you remember their last order."
  });
  return response.text || "Hola, ¿en qué puedo ayudarte?";
};

export const sendPizzaMessage = async (message: string): Promise<string> => {
  if (!pizzaChatSession) await initPizzaDemo();
  if (!pizzaChatSession) throw new Error("Failed to init session");

  try {
    const response = await pizzaChatSession.sendMessage({ message });
    return response.text || "...";
  } catch (error) {
    console.error("Pizza API Error", error);
    return "Lo siento, tuve un problema de conexión. ¿Podrías repetir?";
  }
};

// -- Report Q&A Service --
export const askReportQuestion = async (question: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: question,
      config: {
        systemInstruction: REPORT_ASSISTANT_INSTRUCTION,
      }
    });
    return response.text || "No pude procesar la respuesta.";
  } catch (error) {
    console.error("Report QA Error", error);
    return "Error al conectar con el asistente del informe.";
  }
};
