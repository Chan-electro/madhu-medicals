
import { GoogleGenAI } from "@google/genai";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const getHealthAdviceStream = async (userQuery: string, onChunk: (text: string) => void) => {
  const ai = getAIClient();
  try {
    const stream = await ai.models.generateContentStream({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: "You are a helpful health assistant for Madhu Medicals, a community pharmacy with 35 years of legacy. Provide friendly, accurate, and empathetic health tips. Keep responses concise and practical. ALWAYS include a disclaimer that you are an AI and the user should consult their doctor for medical emergencies. If asked about prices or stock, tell them to call the store at +91 95359 67333.",
        temperature: 0.7,
      },
    });

    for await (const chunk of stream) {
      if (chunk.text) {
        onChunk(chunk.text);
      }
    }
  } catch (error) {
    console.error("Gemini Stream Error:", error);
    onChunk("I'm having trouble connecting to my knowledge base right now. Please call Madhu Medicals directly at +91 95359 67333.");
  }
};

export const getStoreLocations = async (latitude?: number, longitude?: number) => {
  const ai = getAIClient();
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite-latest",
      contents: "List the nearest reputable pharmacies and clinics near MG Road, Bangalore. Include Madhu Medicals as the primary location.",
      config: {
        tools: [{ googleMaps: {} }],
        toolConfig: {
          retrievalConfig: {
            latLng: latitude && longitude ? { latitude, longitude } : { latitude: 12.9716, longitude: 77.5946 }
          }
        }
      },
    });
    
    return {
      text: response.text,
      links: response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map((chunk: any) => ({
        title: chunk.maps?.title || "View on Maps",
        uri: chunk.maps?.uri
      })).filter((l: any) => l.uri) || []
    };
  } catch (error) {
    console.error("Maps Grounding Error:", error);
    return { text: "We're located at Shop No. 4, Green Avenue, MG Road, Bangalore. Open 9 AM to 10 PM.", links: [] };
  }
};

export const analyzePrescription = async (imageData: string) => {
  const ai = getAIClient();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: {
        parts: [
          { inlineData: { mimeType: 'image/jpeg', data: imageData.split(',')[1] } },
          { text: "Analyze this prescription. List the medications mentioned and their suspected dosages if legible. Warn the user that this is an AI analysis and must be verified by a licensed pharmacist at Madhu Medicals." }
        ]
      }
    });
    return response.text;
  } catch (error) {
    console.error("Prescription Analysis Error:", error);
    return "Sorry, I couldn't analyze the image. Please bring the original prescription to our store or try uploading a clearer photo.";
  }
};
