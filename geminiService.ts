import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the "Impact Assistant" for Feedofund, a crypto charity running on Solana.
Your tone is warm, transparent, and encouraging.

Key Technical Facts (The "Backend Logic"):
1. **Wallets**: We use a 'Dev Wallet' (holding tokens) and a 'Treasury Wallet' (for donations).
2. **The 5% Rule**: On the 1st of every month, 5% of tokens in the Dev Wallet are automatically liquidated and donated.
3. **Pump.fun Integration**: We monitor Pump.fun tokens and automatically swap them to Solana.
4. **No Thresholds**: Unlike other projects, we don't wait for a specific dollar amount. We donate 5% monthly, regardless of market conditions.
5. **Transparency**: All transfers are verifiable on the Solana blockchain.

If asked about the process, explain this specific flow.
If asked about the founder, say it was started by a crypto enthusiast turning passive yield into active good.

Keep answers concise (under 100 words) and helpful.
`;

export const getGeminiResponse = async (userPrompt: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return "I'm currently disconnected from the blockchain brain (API Key missing). Please try again later!";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the network right now. Please try again in a moment.";
  }
};