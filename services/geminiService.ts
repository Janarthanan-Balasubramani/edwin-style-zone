import { GoogleGenAI, Chat } from "@google/genai";

let ai: GoogleGenAI | null = null;
let chatSession: Chat | null = null;

const getAiInstance = () => {
  if (!ai) {
    // Only initialize if API key is present
    if (process.env.API_KEY) {
      ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    } else {
      console.warn("API_KEY not found in environment variables. AI features will be disabled.");
    }
  }
  return ai;
};

export const initializeChat = async () => {
  const client = getAiInstance();
  if (!client) return null;

  try {
    chatSession = client.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `You are 'Edwin', a virtual style consultant for 'Edwin Style Zone', a premium hair salon. 
        Your tone is sophisticated, polite, and fashionable. 
        You give advice on hairstyles, beard styles, and hair care.
        Keep answers concise (under 50 words) and encourage booking an appointment for complex issues.
        Currency is INR (₹).`,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize chat:", error);
    return null;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    await initializeChat();
  }
  
  if (!chatSession) {
    return "I'm sorry, I'm having trouble connecting to the style server right now.";
  }

  try {
    const response = await chatSession.sendMessage({ message });
    return response.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm momentarily distracted. Please ask again.";
  }
};

export const generateSalonImage = async (prompt: string): Promise<string | null> => {
  const client = getAiInstance();
  if (!client) return null;

  try {
    // Using gemini-2.5-flash-image for image generation
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }],
      },
    });

    // The output response may contain both image and text parts; iterate to find the image.
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Gemini Image Gen Error:", error);
    return null;
  }
};