import { createReactAgent } from "@langchain/langgraph/prebuilt";

import { ChatAnthropic } from "@langchain/anthropic";

import OpenAI from "openai";

import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // must be sk-...
});

const response = await openai.chat.completions.create({
  model: "gpt-4", // or 'gpt-3.5-turbo'
  messages: [{ role: "user", content: "Hello! how can you help me?" }],
});

console.log(response.choices[0].message.content);
