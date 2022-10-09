import dotenv from "dotenv";
dotenv.config();

import TelegramBot from "node-telegram-bot-api";
import { fetchStats } from "./fetchStats.js";

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });
const sendMessage = async () => {
  const { NewCases } = await fetchStats();
  console.log(`🦠 x ${NewCases}`);
  bot.sendMessage(process.env.CHAT_ID, `🦠 x ${NewCases}`);
};
sendMessage();
