require("dotenv").config();
const fetchStats = require("./fetchStats");

const TelegramBot = require("node-telegram-bot-api");
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });
const sendMessage = async () => {
  const { NewCases } = await fetchStats();
  bot.sendMessage(process.env.CHAT_ID, `🦠 x ${NewCases}`);
};
sendMessage();
