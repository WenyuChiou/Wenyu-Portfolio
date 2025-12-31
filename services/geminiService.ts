
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, SKILLS } from "../constants";

export class GeminiService {
  async chatWithAI(userMessage: string, history: { role: 'user' | 'assistant', content: string }[]) {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      console.error("API Key missing");
      return "ERROR: API Key configuration missing. Please check your environment variables.";
    }
    const ai = new GoogleGenAI({ apiKey });
    try {
      const systemInstruction = `
        You are the Digital Research Twin of Wenyu Chiou, a PhD student at Lehigh University.
        
        CONTEXT:
        - Research: Hydrology, Flood Risk, Climate Adaptation.
        - Labs: Center for Catastrophe Modeling and Resilience (CCMR).
        - Expertise: Agent-Based Modeling (ABM), SEM, LLM-driven behavioral science.
        - Experience: ${JSON.stringify(EXPERIENCES)}
        - Technical Skills: ${JSON.stringify(SKILLS)}
        
        TONE:
        - Academic, insightful, and concise.
        - Speak in first person as Wenyu's AI representative.
        
        INSTRUCTIONS:
        - If asked about technical details (like SEM or ABM), explain them in the context of hydrology/climate risk.
        - Always encourage professional collaboration via ${PERSONAL_INFO.email}.
        - Language: English.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: h.content }] })),
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction,
          temperature: 0.8,
          thinkingConfig: { thinkingBudget: 0 } // Flash-preview responds quickly without deep thinking budget unless specified
        }
      });

      return response.text || "I'm having trouble retrieving that research data. Could you rephrase?";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "The research terminal is currently offline. Please try again shortly.";
    }
  }
}

export const geminiService = new GeminiService();
