import { GoogleGenAI, Modality } from "@google/genai";

const fileToBase64 = (file: File): Promise<{ mimeType: string; data: string }> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      const mimeType = result.split(',')[0].split(':')[1].split(';')[0];
      const data = result.split(',')[1];
      resolve({ mimeType, data });
    };
    reader.onerror = (error) => reject(error);
  });
};

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateHugImage = async (photo1: File, photo2: File, backgroundStyle: string, aspectRatio: string, quality: string, hugPose: string): Promise<string> => {
    const modelName = 'gemini-2.5-flash-image-preview';
    
    if (!process.env.API_KEY) {
        throw new Error("API key is not configured. Please set the API_KEY environment variable.");
    }

    const [photo1Data, photo2Data] = await Promise.all([
        fileToBase64(photo1),
        fileToBase64(photo2)
    ]);

    const backgroundDescriptions: Record<string, string> = {
      vibrant: 'a bright blue sky, soft white clouds, and vibrant, colorful flowers',
      sunset: 'a beautiful, dramatic sunset over a calm ocean, with warm colors like orange, pink, and purple filling the sky',
      forest: 'a lush, magical forest with tall trees, dappled sunlight filtering through the leaves, and a soft, mossy ground',
      beach: 'a serene tropical beach with white sand, crystal-clear turquoise water, and a few palm trees',
      space: 'the vastness of outer space, with swirling nebulas, distant stars, and a view of a beautiful planet',
      underwater: 'a vibrant underwater scene with colorful coral reefs, gently swaying seaweed, and curious fish swimming by',
      castle: 'a majestic fantasy castle on a hill, with towering spires, a grand gate, and a magical, glowing sky behind it',
      aurora: 'the magical, dancing colors of the Northern Lights (aurora borealis) in a clear night sky, with silhouettes of pine trees below',
      mountains: 'a majestic, snow-capped mountain peak during a golden sunrise, with clouds swirling around the summit',
      sakura: 'a beautiful park in Japan filled with blooming cherry blossom (sakura) trees, with petals gently falling',
      rainyCity: 'a romantic, cozy city street at night, with wet cobblestones reflecting the warm glow of streetlights and neon signs under a gentle rain',
      balloons: 'a vibrant sky filled with dozens of colorful hot air balloons floating over a scenic, fantastic landscape',
    };

    const hugPoseDescriptions: Record<string, string> = {
      tight: 'giving a close, tight, and heartwarming hug to',
      side: 'giving a friendly and casual side hug to, with an arm around their shoulder or waist,',
      playful: 'giving a fun and playful hug to, like a piggyback hug or a joyful, dynamic embrace,',
    };

    const aspectRatioDescriptions: Record<string, string> = {
        square: 'a square (1:1) aspect ratio',
        landscape: 'a landscape (16:9) aspect ratio',
        portrait: 'a portrait (9:16) aspect ratio',
    };

    const qualityDescriptions: Record<string, string> = {
        standard: '',
        high: 'The final image should be of the highest quality, with photorealistic details, crisp focus, and rich, lifelike colors.',
    };

    const backgroundPrompt = backgroundDescriptions[backgroundStyle] || backgroundDescriptions.vibrant;
    const hugPosePrompt = hugPoseDescriptions[hugPose] || hugPoseDescriptions.tight;
    const aspectRatioPrompt = aspectRatioDescriptions[aspectRatio] || aspectRatioDescriptions.square;
    const qualityPrompt = qualityDescriptions[quality] || qualityDescriptions.standard;

    const prompt = `Take the main subject from the first image and make them appear to be ${hugPosePrompt} the main subject from the second image. Combine them into a single, cohesive new image. Replace the original backgrounds with a new, beautiful background featuring ${backgroundPrompt}. Harmoniously integrate the subjects into this new scene, ensuring the lighting on them looks natural and consistent with the background. The final image should have a warm, happy, and slightly whimsical feel, and it must be in ${aspectRatioPrompt}. ${qualityPrompt}`;

    const response = await ai.models.generateContent({
        model: modelName,
        contents: {
            parts: [
                {
                    inlineData: {
                        mimeType: photo1Data.mimeType,
                        data: photo1Data.data,
                    },
                },
                {
                    inlineData: {
                        mimeType: photo2Data.mimeType,
                        data: photo2Data.data,
                    },
                },
                {
                    text: prompt,
                },
            ],
        },
        config: {
            responseModalities: [Modality.IMAGE, Modality.TEXT],
        },
    });

    for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
            const base64ImageBytes: string = part.inlineData.data;
            const mimeType = part.inlineData.mimeType;
            return `data:${mimeType};base64,${base64ImageBytes}`;
        }
    }

    throw new Error("The AI did not generate an image. It might have refused the request due to safety policies. Please try with different images.");
};