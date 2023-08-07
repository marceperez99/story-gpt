import { Configuration, OpenAIApi } from "openai";

export const getChatResponse = async (prompt: string) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",

      messages: [
        {
          role: "user",
          content: `Give me a story with a maximum of 100 words using this prompt: \n${prompt}`,
        },
      ],
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    return response.data.choices[0].message?.content;
  } catch (e) {
    return `${JSON.stringify(e)} ${process.env.OPENAI_API_KEY}}`;
  }
};
